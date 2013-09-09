/// <reference path="../AppDefinitions.d.ts"/>

class View {

  private $el:JQuery;

  constructor(text){

    this.$el = $(text);
  }

  public $(selector:string):JQuery{

    return this.$el.find(selector);
  }
}

export = View;