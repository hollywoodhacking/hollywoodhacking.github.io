/// <reference path="../AppDefinitions.d.ts"/>
define(["require", "exports", 'Editor/Typer', 'Editor/EditorView'], function(require, exports, __Typer__, __EditorView__) {
    var Typer = __Typer__;
    var EditorView = __EditorView__;

    var EditorPresenter = (function () {
        function EditorPresenter(typer) {
            this.typer = typer;
        }
        EditorPresenter.prototype.attachView = function (view) {
            this.editorView = view;
            this.updateView();
        };

        EditorPresenter.prototype.update = function (key) {
            switch (key) {
                case 8:
                    this.typer.backspace();
                    break;
                case 9:
                    this.typer.typeFullWord();
                    break;
                case 13:
                    this.typer.typeFullLine();
                case 16:
                case 17:
                case 18:
                    break;
                default:
                    this.typer.typeSingleLetter();
                    break;
            }

            this.updateView();
        };

        EditorPresenter.prototype.updateView = function () {
            var text = this.typer.getText();
            this.editorView.update(text);
        };
        return EditorPresenter;
    })();

    
    return EditorPresenter;
});
//# sourceMappingURL=EditorPresenter.js.map
