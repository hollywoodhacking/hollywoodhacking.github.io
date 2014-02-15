/// <reference path="../system/Presenter.d.ts"/>

import FaceLocationView = require('FaceLocation/FaceLocationView');

class FaceLocationPresenter implements Presenter{
  private view:FaceLocationView;

  public attachView(view:FaceLocationView){
    this.view = view;
  }

  public update(){

  }
}

export = FaceLocationPresenter;