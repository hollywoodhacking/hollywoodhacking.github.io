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

    $.get(path,_(function(data){

      this.typer.setText(data);
      this.trigger('load');

    }).bind(this));
  }
}

export = SourceFile;