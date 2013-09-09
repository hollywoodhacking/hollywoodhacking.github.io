/// <reference path="AppDefinitions.d.ts"/>
/// <reference path="Typer.ts" />
define(["require", "exports"], function(require, exports) {
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
