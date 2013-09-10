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
            if (this.atEndOfWord()) {
                this.typedText += this.getNextCharacter();
                this.index++;

                if (this.getCurrentCharacter() === '\t') {
                    this.typeSingleLetter();
                }
            }
        };

        Typer.prototype.typeFullWord = function () {
            if (this.atEndOfWord()) {
                do {
                    this.typeSingleLetter();
                } while(!/[\s\t\b\n\r]/.test(this.getNextCharacter()));
            }
        };

        Typer.prototype.typeFullLine = function () {
            if (this.atEndOfWord()) {
                do {
                    this.typeSingleLetter();
                } while(!/\n/.test(this.getCurrentCharacter()));
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

        Typer.prototype.atEndOfWord = function () {
            return this.typedText.length < this.fullText.length;
        };

        Typer.prototype.getNextCharacter = function () {
            return this.fullText.charAt(this.index);
        };

        Typer.prototype.getCurrentCharacter = function () {
            return this.typedText.charAt(this.index - 1);
        };
        return Typer;
    })();

    
    return Typer;
});
//# sourceMappingURL=Typer.js.map
