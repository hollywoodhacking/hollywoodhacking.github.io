/// <reference path="../AppDefinitions.d.ts" />
declare class View {
    private $el;
    public events: {};
    constructor(text);
    public render(): JQuery;
    public remove(): void;
    public $(selector: string): JQuery;
    private delegateEvents();
}
export = View;
