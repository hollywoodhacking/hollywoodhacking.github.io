/*
* Adapted from work by Simone Masiero - https://github.com/duiker101/Hacker-Typer
* This work is licensed under a Creative Commons Attribution-Noncommercial-Share Alike 3.0 License
*/

$(
	function(){
		$( document ).keydown(
			function ( event ) { 
				Typer.addText( event );
			}
		);
	}
);

var Typer={
	text: '',
	index:0,
	file:'',
	init: function(){
		$.get(Typer.file,function(data){
			Typer.text=data;
		});
	},
	
	
	addText:function(key){
		if(Typer.text){
			if(key.keyCode!=8){ // backspace
				Typer.index++;
			}else{
				if(Typer.index>0)
					Typer.index--;
			}
			var text = Typer.text.substring(0,Typer.index);
			
			myCodeMirror.setValue(text);
			myCodeMirror.setCursor(Typer.index, Typer.index);

			//$('#debug').html(Typer.index);
			window.scrollBy(0,50);
		}

		// let F11 pass through but capture all other keys
		if(key.keyCode != 122){ 
			if(key.preventDefault){
				key.preventDefault()	
			}
			key.returnValue = false;
		}
	}
}