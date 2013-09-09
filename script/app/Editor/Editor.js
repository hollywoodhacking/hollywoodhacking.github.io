/// <reference path="../AppDefinitions.d.ts"/>
define(["require", "exports", 'Editor/SourceFile', 'Editor/Typer', 'Editor/EditorWindow'], function(require, exports, __SourceFile__, __Typer__, __EditorWindow__) {
    var SourceFile = __SourceFile__;
    var Typer = __Typer__;
    var EditorWindow = __EditorWindow__;

    var Editor = (function () {
        function Editor(file, type) {
            this.filepath = file;
            this.typer = new Typer();
            this.sourceFile = new SourceFile(this.typer);
            this.editorWindow = new EditorWindow('#panel', type);
        }
        Editor.prototype.init = function () {
            this.editorWindow.focus();
            this.sourceFile.load(this.filepath);
        };

        Editor.prototype.update = function (event) {
            if (event.keyCode != 8) {
                this.typer.typeSingleLetter();
            } else {
                this.typer.backspace();
            }

            var text = this.typer.getText();

            this.editorWindow.update(text);
        };
        return Editor;
    })();

    
    return Editor;
});
//# sourceMappingURL=Editor.js.map
