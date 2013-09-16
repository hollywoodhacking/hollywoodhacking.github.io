/// <reference path="../AppDefinitions.d.ts" />
interface EventType {
    addListener(event, listener: (sender: Object) => void, context: Object): void;
    removeListener(event, listener: (sender: Object) => void): void;
    trigger(event, ...args: any[]): void;
    removeAllListeners(): void;
}
