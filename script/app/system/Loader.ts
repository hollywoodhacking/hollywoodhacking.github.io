/// <reference path="../AppDefinitions.d.ts"/>

import AbstractEventType = require('system/AbstractEventType');

class Loader extends AbstractEventType{

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