/// <reference path="AppDefinitions.d.ts"/>
/// <reference path="system/ContainerView.d.ts"/>

import AbstractView = require('system/AbstractView');

class AppView extends AbstractView implements ContainerView{

  private mainView:View;

  constructor(selector){
    super(selector);
    this.$('#splash .close').click(this.toggleSplash);

//    if(document.fullscreen || document.mozFullScreen || document.webkitIsFullScreen || document.msFullscreenElement){
//      this.hideFullscreenPrompt();
//    }
    this.$('#fullscreen_prompt .dismiss').click(this.hideFullscreenPrompt);
    document.addEventListener("fullscreenchange", this.hideFullscreenPrompt, false);
    document.addEventListener("fullscreen", this.hideFullscreenPrompt, false);
    document.addEventListener("mozfullscreenchange", this.hideFullscreenPrompt, false);
    window.addEventListener("webkitfullscreenchange", this.hideFullscreenPrompt, false);
    document.addEventListener("msfullscreenchange", this.hideFullscreenPrompt, false);
  }

  public attachMainView(view:View){

    var el = view.render();

    if(typeof this.mainView !== 'undefined'){
      this.mainView.remove();
    }

    this.mainView = view;
    this.$('#stage').append(el);
  }

  public toggleSplash(){
    $('#splashHolder').toggle();
  }

  private hideFullscreenPrompt(){
    $('#fullscreen_prompt').hide();
  }

}

export = AppView;