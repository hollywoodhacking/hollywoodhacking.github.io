/// <reference path="../AppDefinitions.d.ts" />
import AppView = require('AppView');
import EditorPresenter = require('Editor/EditorPresenter');
declare class EditorBuilder {
    private static instance;
    private editorFactory;
    private editorPresenter;
    static create(): EditorBuilder;
    constructor();
    public build(applicationView: AppView): EditorPresenter;
    private getRandomEditor();
    private loadEditor(path, type);
}
export = EditorBuilder;
