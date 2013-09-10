/// <reference path="AppDefinitions.d.ts"/>

import EditorFactory = require('Editor/EditorFactory');
import EditorPresenter = require('Editor/EditorPresenter');
import EditorLoader = require('Editor/Loader');

class App{

  private editorFactory:EditorFactory;
  private editorPresenter:EditorPresenter;

  constructor(){

    this.editorFactory = EditorFactory.create();
  }

  public init():void{
    $( document ).keydown( _(this.keydown).bind(this) );

    var editorLoader = new EditorLoader();
    var editorView = this.editorFactory.createEditorView('javascript');

    editorLoader.addListener('load', (data:string)=>{

      this.editorPresenter = this.editorFactory.createEditorPresenter(data);
      this.editorPresenter.attachView(editorView);
    }, this);

    var element = editorView.render();

    $('#stage').append(element);

    editorLoader.load('static/js.txt');

  }

  private keydown(event:JQueryEventObject):boolean{
    switch(event.which){

      case 116:
          //load new code with F5
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

  private preventDefaults(event:JQueryEventObject):boolean{
    if(event.preventDefault){
      event.preventDefault()
    }

    return false;
  }


}

export = App;