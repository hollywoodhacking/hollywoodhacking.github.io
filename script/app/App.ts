/// <reference path="AppDefinitions.d.ts"/>
/// <reference path="system/Builder.d.ts"/>
/// <reference path="system/Presenter.d.ts"/>
/// <reference path="system/ContainerView.d.ts"/>

import EditorBuilder = require('Editor/EditorBuilder');
import TerminalBuilder = require('Terminal/TerminalBuilder');
import FaceLocationView = require('FaceLocation/FaceLocationView');
import FaceLocationPresenter = require('FaceLocation/FaceLocationPresenter');

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

      case 116: // load new code with F5
        this.loadEditor();
        break;
      case 117: // toggle mode with F6
        this.toggleMode();
        break;
      case 118:
        // move to face location mode F7
        this.displayFaceLocationMode();
        break;
      case 27: // toggle splash with ESC
        this.applicationView.toggleSplash();
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

  private displayFaceLocationMode(){

    var faceLocationView:FaceLocationView = new FaceLocationView('<div><div class="map"></div><div class="camera"></div></div>');
    this.presenter = new FaceLocationPresenter();
    this.presenter.attachView(faceLocationView);
    this.applicationView.attachMainView(faceLocationView);
    faceLocationView.start();
  }


}

export = App;