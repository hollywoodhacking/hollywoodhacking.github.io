/// <reference path="../AppDefinitions.d.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'system/View'], function(require, exports, __View__) {
    var View = __View__;

    var EditorView = (function (_super) {
        __extends(EditorView, _super);
        function EditorView(text, type) {
            this.type = type;
            _super.call(this, text);
        }
        EditorView.prototype.render = function () {
            var el = _super.prototype.render.call(this);
            this.codeMirror = CodeMirror(this.$('.viewport')[0], { mode: this.type, lineNumbers: true });
            this.codeMirror.focus();
            return el;
        };

        EditorView.prototype.update = function (text) {
            this.codeMirror.setValue(text);
            this.codeMirror.setCursor({ line: text.length, ch: text.length });

            this.updateStatusBar();
        };

        EditorView.prototype.updateStatusBar = function () {
            var cursor = this.codeMirror.getCursor();
            this.$('.statusbar').html('Line ' + cursor.line + ', Column ' + cursor.ch);
        };
        return EditorView;
    })(View);

    
    return EditorView;
});
//# sourceMappingURL=EditorView.js.map
