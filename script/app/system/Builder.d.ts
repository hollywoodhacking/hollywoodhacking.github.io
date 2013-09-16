/// <reference path="../AppDefinitions.d.ts"/>
/// <reference path="View.d.ts"/>
/// <reference path="Presenter.d.ts"/>

interface PresenterViewPair{
  presenter:Presenter;
  view:View;
}

interface Builder{
  build():PresenterViewPair;
}