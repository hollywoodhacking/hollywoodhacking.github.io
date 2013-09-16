/// <reference path="AppDefinitions.d.ts"/>

import AppView = require('AppView');
import App = require('App');

class Bootstrap{
  constructor(){

    var appView = new AppView('body');
    var app = new App();

    app.init(appView);


    // set up keyboard events
    $( document ).keydown((event)=>{

      app.keydown(event.which);

      if(event.which !== 122){
        return this.preventDefaults(event);
      } else {
        return true;
      }

    });

  }

  private preventDefaults(event:JQueryEventObject){
    if(event.preventDefault){
      event.preventDefault();
    }

    return false;
  }


}

export = Bootstrap;

