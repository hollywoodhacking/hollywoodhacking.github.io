/// <reference path="../AppDefinitions.d.ts" />
import Typer = require('Editor/Typer');
import EditorView = require('Editor/EditorView');
declare class EditorPresenter {
    private typer;
    private editorView;
    constructor(typer: Typer);
    public setText(text: string): void;
    public update(key: number): void;
    public attachView(view: EditorView): void;
    private updateView();
}
export = EditorPresenter;
