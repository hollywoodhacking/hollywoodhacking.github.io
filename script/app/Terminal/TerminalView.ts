/// <reference path="../AppDefinitions.d.ts"/>

import AbstractView = require('system/AbstractView');

class TerminalView extends AbstractView{
  constructor(text:string){
    super(text);
  }

  public render():JQuery{
    var el = super.render();
    return el;
  }
}

export = TerminalView;