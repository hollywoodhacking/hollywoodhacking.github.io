/// <reference path="../AppDefinitions.d.ts"/>
define(["require", "exports", 'Editor/SourceFile', 'Editor/Typer', 'Editor/EditorView', 'Editor/Editor.html'], function(require, exports, __SourceFile__, __Typer__, __EditorView__, __EditorHtml__) {
    var SourceFile = __SourceFile__;
    var Typer = __Typer__;
    var EditorView = __EditorView__;
    var EditorHtml = __EditorHtml__;

    var Editor = (function () {
        function Editor(file, type) {
            var template = EditorHtml.get();
            this.filepath = file;
            this.typer = new Typer();
            this.sourceFile = new SourceFile(this.typer);
            this.editorView = new EditorView(template, type);
        }
        Editor.prototype.init = function () {
            var el = this.editorView.render();

            this.sourceFile.addListener('load', function () {
                this.update('');
            }, this.editorView);

            this.sourceFile.load(this.filepath);

            $('#stage').append(el);
        };

        Editor.prototype.update = function (event) {
            if (event.keyCode != 8) {
                this.typer.typeSingleLetter();
            } else {
                this.typer.backspace();
            }

            var text = this.typer.getText();
            this.editorView.update(text);
        };
        return Editor;
    })();

    
    return Editor;
});
//# sourceMappingURL=Editor.js.map