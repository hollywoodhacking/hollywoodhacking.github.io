/// <reference path="AppDefinitions.d.ts"/>
define(["require", "exports", 'SourceFile', 'Typer'], function(require, exports, __SourceFile__, __Typer__) {
    var SourceFile = __SourceFile__;
    var Typer = __Typer__;

    var App = (function () {
        function App(typer, sourceFile, myCodeMirror) {
            this.typer = typer;
            this.sourceFile = sourceFile;
            this.myCodeMirror = myCodeMirror;
        }
        App.prototype.init = function () {
            $(document).keydown(_(this.keydown).bind(this));

            this.myCodeMirror.focus();
            this.sourceFile.load('static/js.txt');
        };

        App.prototype.keydown = function (event) {
            if (event.keyCode != 8) {
                this.typer.typeSingleLetter();
            } else {
                this.typer.backspace();
            }

            var text = this.typer.getText();
            this.myCodeMirror.setValue(text);
            this.myCodeMirror.setCursor({ line: text.length, ch: text.length });

            var cursor = this.myCodeMirror.getCursor();
            $('.statusbar').html('Line ' + cursor.line + ', Column ' + cursor.ch);

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
