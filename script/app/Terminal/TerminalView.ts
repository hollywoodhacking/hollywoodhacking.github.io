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

  public update(text:string):void{

    this.$('.j-terminal-input')[0].innerHTML += text;
  }

  public empty():void{
    this.$('.j-terminal-input').empty();
  }
}

export = TerminalView;