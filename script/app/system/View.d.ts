/// <reference path="../AppDefinitions.d.ts" />
interface View {
    render(): JQuery;
    remove(): void;
    update(any):void;
    $(selector: string): JQuery;
}
