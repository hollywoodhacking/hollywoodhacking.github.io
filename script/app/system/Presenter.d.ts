/// <reference path="../AppDefinitions.d.ts"/>
/// <reference path="View.d.ts"/>

interface Presenter{
  update(key:number):void;
  attachView(view:View):void;
}