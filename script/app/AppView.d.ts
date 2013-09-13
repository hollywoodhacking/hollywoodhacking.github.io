/// <reference path="AppDefinitions.d.ts" />
import View = require('system/View');
declare class AppView extends View {
    private mainView;
    constructor(selector);
    public attachMainView(view: View): void;
}
export = AppView;
