/// <reference path="../AppDefinitions.d.ts"/>

import EventType = require('system/EventType');

class Loader extends EventType{

  constructor(){
    super();
  }

  public load (path:string){

    $.get(path, _(this.dispatchLoad).bind(this));
  }

  private dispatchLoad(data:string){

      this.trigger('load', data);
  }
}

export = Loader;