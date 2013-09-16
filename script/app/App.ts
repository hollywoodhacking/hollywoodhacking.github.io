/// <reference path="AppDefinitions.d.ts"/>
/// <reference path="system/Builder.d.ts"/>
/// <reference path="system/Presenter.d.ts"/>
/// <reference path="system/ContainerView.d.ts"/>

import EditorBuilder = require('Editor/EditorBuilder');

class App{
  private editorBuilder:EditorBuilder;
  private editorPresenter:Presenter;
  private applicationView:ContainerView;

  constructor(){

    this.editorBuilder = EditorBuilder.create();
  }

  public init(applicationView:ContainerView):void{

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

    var editorPair:PresenterViewPair = this.editorBuilder.build();

    this.editorPresenter = editorPair.presenter;

    this.applicationView.attachMainView(editorPair.view);

    // kick off application with a backspace
    this.editorPresenter.update(8);
  }


}

export = App;