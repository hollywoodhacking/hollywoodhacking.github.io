/// <reference path="../AppDefinitions.d.ts"/>
define(["require", "exports", 'Editor/Typer'], function(require, exports, __Typer__) {
    var Typer = __Typer__;

    var SourceFile = (function () {
        function SourceFile(typer) {
            this.typer = typer;
        }
        SourceFile.prototype.load = function (path) {
            var _this = this;

            $.get(path, function (data) {
                _this.typer.setText(data);
            });
        };
        return SourceFile;
    })();

    
    return SourceFile;
});
//# sourceMappingURL=SourceFile.js.map
