/// <reference path="../AppDefinitions.d.ts"/>

import SourceFile = require('Editor/SourceFile');
import Typer = require('Editor/Typer');
import EditorWindow = require('Editor/EditorWindow');

class Editor{
  private filepath:string;
  private typer:Typer;
  private sourceFile:SourceFile;
  private editorWindow:EditorWindow;

  constructor(file, type){
    this.filepath = file;
    this.typer = new Typer();
    this.sourceFile = new SourceFile(this.typer);
    this.editorWindow = new EditorWindow('#panel', type);
  }

  public init():void{
    this.editorWindow.focus();
    this.sourceFile.load(this.filepath);
  }

  public update(event):void{

    if(event.keyCode!=8){ // backspace
      this.typer.typeSingleLetter();
    }else{
      this.typer.backspace();
    }

    var text = this.typer.getText();

    this.editorWindow.update(text);
  }

}

export = Editor;