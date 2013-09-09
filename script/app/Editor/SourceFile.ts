/// <reference path="../AppDefinitions.d.ts"/>

import Typer = require('Editor/Typer');
import EventType = require('system/EventType');

class SourceFile extends EventType{
  private typer : Typer;

  constructor(typer: Typer){
    super();
    this.typer = typer;
  }

  public load (path:string){

    var _this = this;

    $.get(path,function(data){
      _this.typer.setText(data);

      _this.trigger('load');
    });
  }
}

export = SourceFile;