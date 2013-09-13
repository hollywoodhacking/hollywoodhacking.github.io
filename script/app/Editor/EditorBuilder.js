/// <reference path="../AppDefinitions.d.ts"/>
define(["require", "exports", 'AppView', 'system/View', 'Editor/EditorFactory', 'Editor/EditorPresenter', 'Editor/Loader', 'system/Utils/ArrayHelpers'], function(require, exports, __AppView__, __View__, __EditorFactory__, __EditorPresenter__, __EditorLoader__, __ArrayHelpers__) {
    var AppView = __AppView__;
    var View = __View__;
    var EditorFactory = __EditorFactory__;
    var EditorPresenter = __EditorPresenter__;
    var EditorLoader = __EditorLoader__;
    var ArrayHelpers = __ArrayHelpers__;

    var EditorBuilder = (function () {
        function EditorBuilder() {
            this.editorFactory = EditorFactory.create();
        }
        EditorBuilder.create = function () {
            if (typeof EditorBuilder.instance === 'undefined') {
                EditorBuilder.instance = new EditorBuilder();
            }

            return EditorBuilder.instance;
        };

        EditorBuilder.prototype.build = function (applicationView) {
            var editor = this.getRandomEditor();
            var editorView = this.editorFactory.createEditorView(editor.type);

            applicationView.attachMainView(editorView);

            this.editorPresenter = this.editorFactory.createEditorPresenter();
            this.editorPresenter.attachView(editorView);

            this.loadEditor(editor.path, editor.type);

            return this.editorPresenter;
        };

        EditorBuilder.prototype.getRandomEditor = function () {
            var sourceList = [
                { path: 'static/js.txt', type: 'javascript' },
                { path: 'static/kernel.txt', type: 'text/x-csrc' },
                { path: 'static/eve.py.txt', type: 'text/x-python' },
                { path: 'static/Optimizer.hs.txt', type: 'text/x-haskell' }
            ];

            var item = ArrayHelpers.getRandomItem(sourceList);

            return item;
        };

        EditorBuilder.prototype.loadEditor = function (path, type) {
            var _this = this;
            var editorLoader = new EditorLoader();

            editorLoader.addListener('load', function (data) {
                _this.editorPresenter.setText(data);
            }, this);

            editorLoader.load(path);
        };
        return EditorBuilder;
    })();

    
    return EditorBuilder;
});
//# sourceMappingURL=EditorBuilder.js.map
