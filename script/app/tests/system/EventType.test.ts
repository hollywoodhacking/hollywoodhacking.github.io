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

            eventType.trigger('ev');

            expect(triggered).toBe(true);
        });

        it('should not call the listener when it has been removed', () => {

            var triggered = false;

            var triggeredTrue = () => {
                triggered = true;
            };

            eventType.addListener('ev', triggeredTrue, eventType);
            eventType.removeListener('ev', triggeredTrue);
            eventType.trigger('ev');

            expect(triggered).toBe(false);
        });

        it('should allow arguments to be passed over events', ()=>{

            var eventData:string = 'foo';
            var outputData:string = '';

            eventType.addListener('ev', (data:string)=>{
                outputData = data;
            }, eventType);

            eventType.trigger('ev', eventData);

            expect(outputData).toBe(eventData);
        });

        it('should not fire any listeners when removeAllListeners has been called', ()=>{
            var triggered = false;

            var triggeredTrue = () => {
                triggered = true;
            };

            eventType.addListener('ev', triggeredTrue, eventType);
            eventType.addListener('ev', triggeredTrue, eventType);

            eventType.removeAllListeners();

            eventType.trigger('ev');

            expect(triggered).toBe(false);

        });

    });
})