/// <reference path="AppDefinitions.d.ts" />
import AppView = require('AppView');
declare class App {
    private editorPresenter;
    private editorBuilder;
    private applicationView;
    constructor();
    public init(applicationView: AppView): void;
    public keydown(key: number): void;
    private loadEditor();
}
export = App;
