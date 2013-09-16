/// <reference path="../AppDefinitions.d.ts" />
interface View {
    render(): JQuery;
    remove(): void;
    $(selector: string): JQuery;
}
