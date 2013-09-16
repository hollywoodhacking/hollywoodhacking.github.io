/// <reference path="AppDefinitions.d.ts"/>
/// <reference path="system/Builder.d.ts"/>
/// <reference path="system/Presenter.d.ts"/>
/// <reference path="system/ContainerView.d.ts"/>

import EditorBuilder = require('Editor/EditorBuilder');
import TerminalBuilder = require('Terminal/TerminalBuilder');

class App{
  private builder:Builder;
  private presenter:Presenter;
  private applicationView:ContainerView;

  private mode:string;

  constructor(){

    this.mode = 'editor';
    this.builder = EditorBuilder.create();
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
      case 117:
        this.toggleMode();
        break;
      default:
        this.presenter.update(key);
        break;
    }
  }

  private loadEditor():void{

    var presenterViewPair:PresenterViewPair = this.builder.build();

    this.presenter = presenterViewPair.presenter;

    this.applicationView.attachMainView(presenterViewPair.view);

    // kick off application with a backspace
    this.presenter.update(8);
  }

  private toggleMode():void{
    if(this.mode === 'editor'){
      this.mode = 'terminal';
      this.builder = TerminalBuilder.create();
    }else{
      this.mode = 'editor';
      this.builder = EditorBuilder.create();
    }

    this.loadEditor();
  }


}

export = App;