/*
* Adapted from Hacker-Typer by Simone Masiero - https://github.com/duiker101/Hacker-Typer
*/

define(['Typer'],
function(Typer){


$( document ).keydown(
	function ( event ) { 
		App.addText( event );
	}
);


var typer;

var App={
	file:'static/js.txt',
	init: function(){
		$.get(App.file,function(data){
			typer = new Typer(data);
			document.title = App.file + ' :: Line 0, Column 0';
		});
	},
	
	
	addText:function(key){
	
		if(key.keyCode!=8){ // backspace
			typer.typeSingleLetter();
		}else{
			typer.backspace();	
		}
		var text = typer.getText();
		
		myCodeMirror.setValue(text);
		myCodeMirror.setCursor(typer.index, typer.index);

		//$('#debug').html(Typer.index);
		var cursor = myCodeMirror.getCursor();
		$('.statusbar').html('Line ' + cursor.line + ', Column ' + cursor.ch);
		document.title = App.file + ' :: Line ' + cursor.line + ', Column ' + cursor.ch;
		window.scrollBy(0,50);
		

		// let F11 pass through but capture all other keys
		if(key.keyCode != 122){ 
			if(key.preventDefault){
				key.preventDefault()	
			}
			key.returnValue = false;
		}
	}
};

App.init();
var myCodeMirror = CodeMirror($('.viewport')[0],{mode: "javascript", lineNumbers: true});
myCodeMirror.focus();
});