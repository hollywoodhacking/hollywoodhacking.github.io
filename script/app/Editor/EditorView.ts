/// <reference path="../AppDefinitions.d.ts"/>

import View = require('system/View');

class EditorView extends View{

  private codeMirror:any;
  private type:string;
  public events = {
    'click': 'clickHandle'
  };

  constructor(text:string, type){
    super(text);
    this.type = type;
  }

  public render():JQuery{
    var el = super.render();
    this.codeMirror =  CodeMirror(this.$('.viewport')[0], {mode: this.type, lineNumbers: true});
    this.codeMirror.focus();
    return el;
  }

  public update(text:string):void{

    this.codeMirror.setValue(text);
    this.codeMirror.setCursor({line: text.length, ch: text.length});

    this.updateStatusBar();
  }

  private updateStatusBar():void{
    var cursor = this.codeMirror.getCursor();
    this.$('.statusbar').html('Line ' + (cursor.line + 1) + ', Column ' + cursor.ch);
  }

  private clickHandle():void{

      alert('yo!');
  }
}

export = EditorView;