/// <reference path="AppDefinitions.d.ts"/>
/// <reference path="system/ContainerView.d.ts"/>

import AbstractView = require('system/AbstractView');

class AppView extends AbstractView implements ContainerView{

  private mainView:View;

  constructor(selector){
    super(selector);
  }

  public attachMainView(view:View){

    var el = view.render();

    if(typeof this.mainView !== 'undefined'){
      this.mainView.remove();
    }

    this.mainView = view;
    this.$('#stage').append(el);
  }

}

export = AppView;