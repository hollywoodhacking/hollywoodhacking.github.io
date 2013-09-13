/// <reference path="../AppDefinitions.d.ts" />
import View = require('system/View');
declare class EditorView extends View {
    private codeMirror;
    private type;
    public events: {
        'click': string;
    };
    constructor(text: string, type);
    public render(): JQuery;
    public update(text: string): void;
    private updateStatusBar();
    private clickHandle();
}
export = EditorView;
