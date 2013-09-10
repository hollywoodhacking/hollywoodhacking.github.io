/// <reference path="AppDefinitions.d.ts"/>
define(["require", "exports", 'Editor/EditorFactory', 'Editor/EditorPresenter', 'Editor/Loader', 'system/View'], function(require, exports, __EditorFactory__, __EditorPresenter__, __EditorLoader__, __View__) {
    var EditorFactory = __EditorFactory__;
    var EditorPresenter = __EditorPresenter__;
    var EditorLoader = __EditorLoader__;
    var View = __View__;

    var App = (function () {
        function App() {
            this.editorFactory = EditorFactory.create();
        }
        App.prototype.init = function () {
            $(document).keydown(_(this.keydown).bind(this));

            this.loadRandomEditor();
        };

        App.prototype.loadEditor = function (path, type) {
            var _this = this;
            var editorLoader = new EditorLoader();
            var editorView = this.editorFactory.createEditorView(type);

            this.addEditorView(editorView);

            editorLoader.addListener('load', function (data) {
                _this.editorPresenter = _this.editorFactory.createEditorPresenter(data);
                _this.editorPresenter.attachView(editorView);
            }, this);

            editorLoader.load(path);
        };

        App.prototype.addEditorView = function (view) {
            if (typeof this.editorView !== 'undefined') {
                this.editorView.remove();
            }

            this.editorView = view;
            var element = this.editorView.render();
            $('#stage').append(element);
        };

        App.prototype.keydown = function (event) {
            switch (event.which) {
                case 116:
                    this.loadRandomEditor();
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

        App.prototype.loadRandomEditor = function () {
            var sourceList = [
                { path: 'static/js.txt', type: 'javascript' },
                { path: 'static/kernel.txt', type: 'text/x-csrc' }
            ];

            var randomIndex = Math.round(Math.random() * (sourceList.length - 1));

            var chosenSource = sourceList[randomIndex];
            this.loadEditor(chosenSource.path, chosenSource.type);
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
