/// <reference path="../AppDefinitions.d.ts"/>

class View {

  private $el:JQuery;
  public events:{};

  constructor(text){

    this.$el = $(text);
    this.delegateEvents();
  }

  public render():JQuery{

    return this.$el;
  }

  public $(selector:string):JQuery{

    return this.$el.find(selector);
  }

  private delegateEvents():void{
    var delegateEventSplitter = /^(\S+)\s*(.*)$/;

    for (var key in this.events) {
      var method = _(this[this.events[key]]).bind(this);

      if (!method) {
        continue;
      }

      var match = key.match(delegateEventSplitter);
      var eventName = match[1], selector = match[2];

      if (selector === '') {
        this.$el.on(eventName, method);
      } else {
        this.$el.on(eventName, selector, method);
      }
    }

  }
}

export = View;