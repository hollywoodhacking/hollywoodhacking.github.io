/// <reference path="../AppDefinitions.d.ts"/>

import SourceFile = require('Editor/SourceFile');
import Typer = require('Editor/Typer');
import EditorView = require('Editor/EditorView');
import EditorHtml = require('Editor/Editor.html');

class Editor{
  private filepath:string;
  private typer:Typer;
  private sourceFile:SourceFile;
  private editorView:EditorView;

  constructor(file, type){
    var template = EditorHtml.get();
    this.filepath = file;
    this.typer = new Typer();
    this.sourceFile = new SourceFile(this.typer);
    this.editorView = new EditorView(template, type);
  }

  public init():void{

    var el = this.editorView.render();

    this.sourceFile.addListener('load', function(){
      this.update('');
    }, this.editorView);

    this.sourceFile.load(this.filepath);

    $('#stage').append(el);
  }

  public update(event):void{

    if(event.keyCode!=8){ // backspace
      this.typer.typeSingleLetter();
    }else{
      this.typer.backspace();
    }

    var text = this.typer.getText();

    this.editorView.update(text);
  }

}

export = Editor;