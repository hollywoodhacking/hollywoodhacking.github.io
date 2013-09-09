/// <reference path="AppDefinitions.d.ts"/>

import Editor = require('Editor/Editor');

class App{

  private editor:Editor;

  constructor(){
    this.editor = new Editor('static/js.txt', 'javascript');
  }

  public init():void{
    $( document ).keydown( _(this.keydown).bind(this) );

    this.editor.init();
  }

  private keydown(event):void{

    this.editor.update(event);

    this.preventDefaults(event);
  }

  private preventDefaults(event):void{
    // let F11 pass through but capture all other keys
    if(event.keyCode != 122){
      if(event.preventDefault){
        event.preventDefault()
      }
      event.returnValue = false;
    }
  }


}

export = App;