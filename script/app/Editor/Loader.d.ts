/// <reference path="../AppDefinitions.d.ts" />
import EventType = require('system/EventType');
declare class Loader extends EventType {
    constructor();
    public load(path: string): void;
    private dispatchLoad(data);
}
export = Loader;
