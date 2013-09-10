/// <reference path="../AppDefinitions.d.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'Editor/Typer', 'system/EventType'], function(require, exports, __Typer__, __EventType__) {
    var Typer = __Typer__;
    var EventType = __EventType__;

    var SourceFile = (function (_super) {
        __extends(SourceFile, _super);
        function SourceFile(typer) {
            _super.call(this);
            this.typer = typer;
        }
        SourceFile.prototype.load = function (path) {
            $.get(path, _(function (data) {
                this.typer.setText(data);
                this.trigger('load');
            }).bind(this));
        };
        return SourceFile;
    })(EventType);

    
    return SourceFile;
});
//# sourceMappingURL=SourceFile.js.map
