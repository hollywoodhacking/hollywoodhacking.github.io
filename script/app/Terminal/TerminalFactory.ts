/// <reference path="../AppDefinitions.d.ts"/>

import TerminalPresenter = require('Terminal/TerminalPresenter');
import TerminalView = require('Terminal/TerminalView');
import TerminalHtml = require('Terminal/Terminal.html');


class TerminalFactory{

  private static instance:TerminalFactory;

  public static create():TerminalFactory{

    if(typeof TerminalFactory.instance === 'undefined'){
      TerminalFactory.instance = new TerminalFactory();
    }

    return TerminalFactory.instance;
  }

  public createTerminalView():TerminalView{

    var template = TerminalHtml.get();

    return new TerminalView(template);
  }

  public createTerminalPresenter ():TerminalPresenter{

    return new TerminalPresenter();
  }
}

export = TerminalFactory;