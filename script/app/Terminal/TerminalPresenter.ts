/// <reference path="../AppDefinitions.d.ts"/>
/// <reference path="../system/Presenter.d.ts"/>
/// <reference path="../system/View.d.ts"/>

class TerminalPresenter implements Presenter{
  private view:View;

  attachView(view:View):void{
    this.view = view;
  }

  update(key:number):void{

  }
}

export = TerminalPresenter;