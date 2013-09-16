/// <reference path="../AppDefinitions.d.ts"/>
/// <reference path="../system/Presenter.d.ts"/>
/// <reference path="../system/View.d.ts"/>

import TerminalOutput = require('Terminal/TerminalOutput');

class TerminalPresenter implements Presenter{
  private view:View;
  private terminalOutput:TerminalOutput;

  constructor(terminalOutput:TerminalOutput){

    this.terminalOutput = terminalOutput;
  }

  attachView(view:View):void{
    this.view = view;
  }

  update(key:number):void{

  }
}

export = TerminalPresenter;