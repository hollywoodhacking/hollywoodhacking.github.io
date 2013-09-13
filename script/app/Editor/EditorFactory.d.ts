/// <reference path="../AppDefinitions.d.ts" />
import EditorPresenter = require('Editor/EditorPresenter');
import EditorView = require('Editor/EditorView');
declare class EditorFactory {
    private static instance;
    static create(): EditorFactory;
    public createEditorView(type: string): EditorView;
    public createEditorPresenter(): EditorPresenter;
}
export = EditorFactory;
