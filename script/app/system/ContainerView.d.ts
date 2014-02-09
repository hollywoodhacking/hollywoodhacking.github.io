/// <reference path="../AppDefinitions.d.ts"/>
/// <reference path="View.d.ts"/>

interface ContainerView extends View{
  attachMainView(view:View):void;
  toggleSplash():void;
}