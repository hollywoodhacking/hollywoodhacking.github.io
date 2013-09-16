/// <reference path="../AppDefinitions.d.ts"/>
/// <reference path="../system/View.d.ts"/>
/// <reference path="../system/ContainerView.d.ts"/>

interface sourceDescription{
  path:string;
  type:string;
}

import EditorFactory = require('Editor/EditorFactory');
import EditorPresenter = require('Editor/EditorPresenter');
import EditorLoader = require('Editor/Loader');
import ArrayHelpers = require('system/Utils/ArrayHelpers')

class EditorBuilder{

  private static instance:EditorBuilder;
  private editorFactory:EditorFactory;
  private editorPresenter:EditorPresenter;

  public static create():EditorBuilder{

    if(typeof EditorBuilder.instance === 'undefined'){
      EditorBuilder.instance = new EditorBuilder();
    }

    return EditorBuilder.instance;
  }

  constructor(){

    this.editorFactory = EditorFactory.create();
  }


  public build(applicationView:ContainerView):EditorPresenter{

    var editor = this.getRandomEditor();
    var editorView:View = this.editorFactory.createEditorView(editor.type);

    applicationView.attachMainView(editorView);

    this.editorPresenter = this.editorFactory.createEditorPresenter();
    this.editorPresenter.attachView(editorView);

    this.loadEditor(editor.path);

    return this.editorPresenter;
  }

  private getRandomEditor():sourceDescription{

    var sourceList = [
      {path: 'static/js.txt', type: 'javascript'},
      {path: 'static/kernel.txt', type:'text/x-csrc'},
      {path: 'static/eve.py.txt', type:'text/x-python'},
      {path: 'static/Optimizer.hs.txt', type:'text/x-haskell'}
    ];

    var item = ArrayHelpers.getRandomItem(sourceList);

    return item;
  }


  private loadEditor(path:string){

    var editorLoader = new EditorLoader();

    editorLoader.addListener('load', (data:string)=>{
      this.editorPresenter.setText(data);
    }, this);

    editorLoader.load(path);
  }
}

export = EditorBuilder;