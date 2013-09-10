/// <reference path="../jasmine.d.ts" />

import EventType = require('system/EventType');

describe('EventType abstract : ', () => {

    describe('add events : ', () => {

        var eventType:EventType;

        beforeEach(() => {
            eventType = new EventType();
        });

        it('should allow a client to listen to arbitrary events', () => {

            expect(()=>{eventType.addListener('event', () => {}, eventType);}).not.toThrow();
        });

        it('should call the listener when an event is triggered', () => {

            var triggered = false;
            eventType.addListener('ev', ()=>{
                triggered = true;
            }, eventType);

            expect(triggered).toBe(true);
        });

    });
})