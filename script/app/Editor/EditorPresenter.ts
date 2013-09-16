/// <reference path="../AppDefinitions.d.ts"/>
/// <reference path="../system/Presenter.d.ts"/>
/// <reference path="../system/View.d.ts"/>

import Typer = require('Editor/Typer');

class EditorPresenter implements  Presenter{
  private typer:Typer;
  private editorView:View;

  constructor(typer:Typer){

    this.typer = typer;
  }

  public setText(text:string):void{
    this.typer.setText(text);
  }

  public update(key:number):void{

    switch(key){
      case 8:
        this.typer.backspace();
        break;
      case 9:
        this.typer.typeFullWord();
        break;
      case 13:
        this.typer.typeFullLine();
      case 16:
      case 17:
      case 18:
        break;
      default:
        this.typer.typeSingleLetter();
        break;
    }

    this.updateView();

  }

  public attachView(view:View){
    this.editorView = view;
  }

  private updateView():void{
    var text = this.typer.getText();
    this.editorView.update(text);
  }

}

export = EditorPresenter;