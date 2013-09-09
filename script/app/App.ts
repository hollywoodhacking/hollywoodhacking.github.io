/// <reference path="AppDefinitions.d.ts"/>
/// <reference path="Typer.ts"/>
/// <reference path="SourceFile.ts"/>

class App{

  private typer:Typer;
  private sourceFile:SourceFile;
  private myCodeMirror:any;

  constructor(typer:Typer, sourceFile:SourceFile, myCodeMirror:any){
    this.typer = typer;
    this.sourceFile = sourceFile;
    this.myCodeMirror = myCodeMirror;
  }

  public init():void{
    $( document ).keydown( _(this.keydown).bind(this) );

    this.myCodeMirror.focus();
    this.sourceFile.load('static/js.txt');
  }

  private keydown(event){

    if(event.keyCode!=8){ // backspace
      this.typer.typeSingleLetter();
    }else{
      this.typer.backspace();
    }

    var text = this.typer.getText();
    this.myCodeMirror.setValue(text);
    this.myCodeMirror.setCursor(text.length);


    var cursor = this.myCodeMirror.getCursor();
    $('.statusbar').html('Line ' + cursor.line + ', Column ' + cursor.ch);

    // let F11 pass through but capture all other keys
    if(event.keyCode != 122){
      if(event.preventDefault){
        event.preventDefault()
      }
      event.returnValue = false;
    }
  }


}

export = App;