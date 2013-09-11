/// <reference path="../AppDefinitions.d.ts"/>

import EditorPresenter = require('Editor/EditorPresenter');
import EditorView = require('Editor/EditorView');
import EditorHtml = require('Editor/Editor.html');
import Typer = require('Editor/Typer');


class EditorFactory{

  private static instance:EditorFactory;

  public static create():EditorFactory{

    if(typeof EditorFactory.instance === 'undefined'){
      EditorFactory.instance = new EditorFactory();
    }

    return EditorFactory.instance;
  }

  public createEditorView(type:string):EditorView{

    var template = EditorHtml.get();

    return new EditorView(template, type);
  }

  public createEditorPresenter ():EditorPresenter{

    var typer = new Typer();
    return new EditorPresenter(typer);
  }
}

export = EditorFactory;