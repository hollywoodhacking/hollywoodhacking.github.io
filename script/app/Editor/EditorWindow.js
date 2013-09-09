/// <reference path="../AppDefinitions.d.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'system/View'], function(require, exports, __View__) {
    var View = __View__;

    var EditorWindow = (function (_super) {
        __extends(EditorWindow, _super);
        function EditorWindow(text, type) {
            _super.call(this, text);
            this.codeMirror = CodeMirror($('.viewport')[0], { mode: type, lineNumbers: true });
        }
        EditorWindow.prototype.focus = function () {
            this.codeMirror.focus();
        };

        EditorWindow.prototype.update = function (text) {
            this.codeMirror.setValue(text);
            this.codeMirror.setCursor({ line: text.length, ch: text.length });

            this.updateStatusBar();
        };

        EditorWindow.prototype.updateStatusBar = function () {
            var cursor = this.codeMirror.getCursor();
            this.$('.statusbar').html('Line ' + cursor.line + ', Column ' + cursor.ch);
        };
        return EditorWindow;
    })(View);

    
    return EditorWindow;
});
//# sourceMappingURL=EditorWindow.js.map
