define(["require", "exports"], function(require, exports) {
    var Typer = (function () {
        function Typer() {
            this.typedText = '';
            this.fullText = '';
            this.index = 0;
        }
        Typer.prototype.setText = function (text) {
            this.typedText = '';
            this.fullText = text;
            this.index = 0;
        };

        Typer.prototype.typeSingleLetter = function () {
            if (this.typedText.length < this.fullText.length) {
                this.typedText += this.fullText.charAt(this.index);
                this.index++;

                if (this.typedText[(this.index - 1)] === '\t') {
                    this.typeSingleLetter();
                }
            }
        };

        Typer.prototype.backspace = function () {
            if (this.index > 0) {
                this.index--;
                this.typedText = this.typedText.substring(0, this.index);
            }
        };

        Typer.prototype.getText = function () {
            return this.typedText;
        };
        return Typer;
    })();

    
    return Typer;
});
//# sourceMappingURL=Typer.js.map
