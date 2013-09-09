/// <reference path="../AppDefinitions.d.ts"/>

import View = require('system/View');

class EditorWindow extends View{

  private codeMirror:any;

  constructor(text, type){
    super(text);
    this.codeMirror =  CodeMirror($('.viewport')[0],{mode: type, lineNumbers: true});
  }

  public focus():void{

    this.codeMirror.focus();
  }

  public update(text:string):void{

    this.codeMirror.setValue(text);
    this.codeMirror.setCursor({line: text.length, ch: text.length});

    this.updateStatusBar();
  }

  private updateStatusBar():void{
    var cursor = this.codeMirror.getCursor();
    this.$('.statusbar').html('Line ' + cursor.line + ', Column ' + cursor.ch);
  }
}

export = EditorWindow;