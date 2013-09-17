/// <reference path="../AppDefinitions.d.ts"/>

import AbstractView = require('system/AbstractView');

class TerminalView extends AbstractView{

  private CURSOR_HIDE_TIME:number = 1150;
  private CURSOR_SHOW_TIME:number = 600;
  private cursorFlash:boolean = false;
  private timeout:number;

  constructor(text:string){
    super(text);
  }

  public startInput(){
    this.update(this.getPrompt());

    this.startCursor();
  }

  private getPrompt():string{

    var prompt = '<span class="bracket">[</span>';
    prompt += this.getTime();
    prompt += '<span class="bracket">]</span>';
    prompt += '<span class="name">zerocool</span><span class="at">@</span>'
    prompt += '<span class="host">localhost</span>';
    prompt += ' <span class="chevron">></span> ';

    return prompt;
  }

  private getTime():string{
    var date = new Date();
    var hours = date.getHours();
    var mins = date.getMinutes();

    return hours + ':' + mins;
  }

  private startCursor():void{
    this.cursorFlash = true;

    this.addCursor();

  }

  private addCursor():void{

    clearTimeout(this.timeout);

    this.update(this.getCursor());

    if(this.cursorFlash){
      this.timeout = setTimeout(()=>{this.removeCursor();}, this.CURSOR_SHOW_TIME);
    }
  }

  private removeCursor():void{

    clearTimeout(this.timeout);

    this.$('.cursor').remove();

    if(this.cursorFlash){
      this.timeout = setTimeout(()=>{this.addCursor();}, this.CURSOR_HIDE_TIME);
    }
  }

  private getCursor():string{
    return '<span class="cursor"> </span>';
  }

  public stopInput(){
    this.cursorFlash = false;
    this.removeCursor();
  }

  public update(text:string):void{

    this.removeCursor();

    this.$('.j-terminal-input')[0].innerHTML += text;
  }

  public empty():void{
    this.$('.j-terminal-input').empty();
  }
}

export = TerminalView;