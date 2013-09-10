/// <reference path="AppDefinitions.d.ts"/>

import EditorFactory = require('Editor/EditorFactory');
import EditorPresenter = require('Editor/EditorPresenter');
import EditorLoader = require('Editor/Loader');
import View = require('system/View');

class App{

  private editorFactory:EditorFactory;
  private editorPresenter:EditorPresenter;
  private editorView:View;

  constructor(){

    this.editorFactory = EditorFactory.create();
  }

  public init():void{
    $( document ).keydown( _(this.keydown).bind(this) );

    this.loadRandomEditor();

  }

  private loadEditor(path:string, type:string){

    var editorLoader = new EditorLoader();
    var editorView = this.editorFactory.createEditorView(type);

    this.addEditorView(editorView);

    editorLoader.addListener('load', (data:string)=>{

      this.editorPresenter = this.editorFactory.createEditorPresenter(data);
      this.editorPresenter.attachView(editorView);
    }, this);

    editorLoader.load(path);
  }

  private addEditorView(view:View):void{

    if(typeof this.editorView !== 'undefined'){
      this.editorView.remove();
    }

    this.editorView = view;
    var element = this.editorView.render();
    $('#stage').append(element);
  }

  private keydown(event:JQueryEventObject):boolean{
    switch(event.which){

      case 116: //load new code with F5
          this.loadRandomEditor();
        break;
      case 122:
        return true; // let F11 pass through
      default:
        this.editorPresenter.update(event.which);
        break;
    }

    this.preventDefaults(event);
    return false;
  }

  private loadRandomEditor():void{

    var sourceList = [
      {path: 'static/js.txt', type: 'javascript'},
      {path: 'static/kernel.txt', type:'text/x-csrc'}
    ];

    var randomIndex = Math.round(Math.random() * (sourceList.length - 1));

    var chosenSource = sourceList[randomIndex];
    this.loadEditor(chosenSource.path, chosenSource.type);
  }

  private preventDefaults(event:JQueryEventObject):boolean{
    if(event.preventDefault){
      event.preventDefault()
    }

    return false;
  }


}

export = App;