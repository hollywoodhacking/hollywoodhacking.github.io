/// <reference path="AppDefinitions.d.ts"/>

import Typer = require('Typer');

class SourceFile {
  private typer : Typer;

  constructor(typer: Typer){
    this.typer = typer;
  }

  public load (path:string){

    var _this = this;

    $.get(path,function(data){
      _this.typer.setText(data);
    });
  }
}

export = SourceFile;