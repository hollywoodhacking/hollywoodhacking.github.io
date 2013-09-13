/// <reference path="../AppDefinitions.d.ts" />
declare class EventType {
    private eventHash;
    public addListener(event, listener: (sender: Object) => void, context: Object): void;
    public removeListener(event, listener: (sender: Object) => void): void;
    public trigger(event, ...args: any[]): void;
    public removeAllListeners(): void;
    private eventStored(event);
}
export = EventType;
