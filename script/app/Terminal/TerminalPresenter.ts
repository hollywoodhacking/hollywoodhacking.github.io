/// <reference path="../AppDefinitions.d.ts"/>
/// <reference path="../system/Presenter.d.ts"/>
/// <reference path="../system/View.d.ts"/>

import TerminalOutput = require('Terminal/TerminalOutput');

class TerminalPresenter implements Presenter{
  private view:View;
  private terminalOutput:TerminalOutput;
  private MAX_DELAY:number = 1000;
  private mode:string = 'lines';

  constructor(terminalOutput:TerminalOutput){

    this.terminalOutput = terminalOutput;
  }

  public start():void{
    this.view.empty();
    this.autoUpdate();
  }

  private autoUpdate():void{

    var output = this.terminalOutput.getText();

    if(output === '%STOP'){
      this.mode = 'input';
    }else if(output === '%START'){
      this.mode === 'lines';
    }else{
      this.view.update(output);
    }

    if(this.mode === 'lines'){
      setTimeout(()=>{this.autoUpdate();}, this.getRandomDelay());
    }
  }

  private getRandomDelay():number{

    return Math.floor(Math.random()*this.MAX_DELAY);
  }

  public attachView(view:View):void{
    this.view = view;
  }

  public update(key:number):void{
    this.autoUpdate();
  }
}

export = TerminalPresenter;