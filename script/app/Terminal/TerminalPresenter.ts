/// <reference path="../AppDefinitions.d.ts"/>
/// <reference path="../system/Presenter.d.ts"/>

import TerminalView = require('Terminal/TerminalView');
import TerminalOutput = require('Terminal/TerminalOutput');

class TerminalPresenter implements Presenter{
  private view:TerminalView;
  private timeout:number;
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

    var output:string = this.terminalOutput.getText();

    clearTimeout(this.timeout);

    if(output === '%STOP'){
      this.mode = 'input';
      this.view.startInput();
    }else if(output === '%START'){
      this.mode = 'lines';
      this.view.stopInput();
    }else{
      this.view.update(output);
    }

    if(this.mode === 'lines'){
      this.timeout = setTimeout(()=>{this.autoUpdate();}, this.getRandomDelay());
    }
  }

  private getRandomDelay():number{

    return Math.floor(Math.random()*this.MAX_DELAY);
  }

  public attachView(view:TerminalView):void{
    this.view = view;
  }

  public update(key:number):void{
    this.autoUpdate();
  }
}

export = TerminalPresenter;