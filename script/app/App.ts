/// <reference path="AppDefinitions.d.ts"/>
/// <reference path="Editor/EditorPresenter.d.ts"/>

import EditorBuilder = require('Editor/EditorBuilder');
import AppView = require('AppView');

class App{
  private editorPresenter:EditorPresenter;
  private editorBuilder:EditorBuilder;
  private applicationView:AppView;

  constructor(){

    this.editorBuilder = EditorBuilder.create();
  }

  public init(applicationView:AppView):void{

    this.applicationView = applicationView;
    this.loadEditor();
  }

  public keydown(key:number):void{
    switch(key){

      case 116: //load new code with F5
        this.loadEditor();
        break;
      default:
        this.editorPresenter.update(key);
        break;
    }
  }

  private loadEditor():void{

    this.editorPresenter = this.editorBuilder.build(this.applicationView);
  }


}

export = App;