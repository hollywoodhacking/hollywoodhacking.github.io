/// <reference path="../AppDefinitions.d.ts"/>
/// <reference path="../system/View.d.ts"/>
/// <reference path="../system/Presenter.d.ts"/>
/// <reference path="../system/Builder.d.ts"/>

import TerminalFactory = require('Terminal/TerminalFactory');

class TerminalBuilder implements Builder{

  private static instance:TerminalBuilder;
  private terminalFactory:TerminalFactory;

  public static create():TerminalBuilder{

    if(typeof TerminalBuilder.instance === 'undefined'){
      TerminalBuilder.instance = new TerminalBuilder();
    }

    return TerminalBuilder.instance;
  }


  constructor(){
    this.terminalFactory = TerminalFactory.create();
  }

  public build():PresenterViewPair{

    var presenter:Presenter = this.terminalFactory.createTerminalPresenter();
    var view:View = this.terminalFactory.createTerminalView();

    presenter.attachView(view);

    return{
      view:view,
      presenter:presenter
    };

  }

}

export = TerminalBuilder;