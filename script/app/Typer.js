define(function(){

	var Typer = function(text){

		this.fullText = text;
		this.index = 0;
	};

	Typer.prototype.typeSingleLetter = function(){
		this.index++;
	};

	Typer.prototype.backspace = function(){
		if(this.index>0){
			this.index--;
		}
	};

	Typer.prototype.getText = function (){
		return this.fullText.substring(0,this.index);
	}

	return Typer;
});