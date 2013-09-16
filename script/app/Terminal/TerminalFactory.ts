/// <reference path="../AppDefinitions.d.ts"/>

import TerminalPresenter = require('Terminal/TerminalPresenter');
import TerminalView = require('Terminal/TerminalView');
import TerminalHtml = require('Terminal/Terminal.html');
import TerminalOutput = require('Terminal/TerminalOutput');
import Loader = require('system/Loader');


class TerminalFactory{

  private static instance:TerminalFactory;

  public static create():TerminalFactory{

    if(typeof TerminalFactory.instance === 'undefined'){
      TerminalFactory.instance = new TerminalFactory();
    }

    return TerminalFactory.instance;
  }

  public createTerminalView():TerminalView{

    var template:string = TerminalHtml.get();

    return new TerminalView(template);
  }

  public createTerminalPresenter ():TerminalPresenter{

    var terminalOutput:TerminalOutput = new TerminalOutput();
    var terminalPresenter:TerminalPresenter = new TerminalPresenter(terminalOutput);
    var loader = new Loader();

    loader.addListener('load', (data)=>{
      terminalOutput.setText(data);
      terminalPresenter.start();
    });

    loader.load('static/terminal.txt');

    return terminalPresenter;
  }
}

export = TerminalFactory;