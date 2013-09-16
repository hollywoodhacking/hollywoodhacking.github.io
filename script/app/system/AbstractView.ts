/// <reference path="../AppDefinitions.d.ts"/>
/// <reference path="View.d.ts"/>

class AbstractView implements  View{

  private $el:JQuery;
  public events:{};

  constructor(text){

    this.$el = $(text);
    this.delegateEvents();
  }

  public render():JQuery{

    return this.$el;
  }

  public remove():void{
    this.$el.remove();
  }

  public $(selector:string):JQuery{

    return this.$el.find(selector);
  }

  public update(any):void{

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

  public empty():void{
    this.$el.empty();
  }
}

export = AbstractView;