/// <reference path="../AppDefinitions.d.ts"/>

import AbstractView = require('system/AbstractView');

class TerminalView extends AbstractView{
  constructor(text:string){
    super(text);
  }

  public startInput(){

  }

  public stopInput(){

  }

  public update(text:string):void{

    this.$('.j-terminal-input')[0].innerHTML += text;
  }

  private addPrompt():string{
    return '';
  }

  public empty():void{
    this.$('.j-terminal-input').empty();
  }
}

export = TerminalView;