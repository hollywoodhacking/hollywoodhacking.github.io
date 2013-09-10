/// <reference path="../jasmine.d.ts" />
define(["require", "exports", 'system/EventType'], function(require, exports, __EventType__) {
    var EventType = __EventType__;

    describe('EventType abstract : ', function () {
        describe('add events : ', function () {
            var eventType;

            beforeEach(function () {
                eventType = new EventType();
            });

            it('should allow a client to listen to arbitrary events', function () {
                expect(function () {
                    eventType.addListener('event', function () {
                    }, eventType);
                }).not.toThrow();
            });

            it('should call the listener when an event is triggered', function () {
                var triggered = false;
                eventType.addListener('ev', function () {
                    triggered = true;
                }, eventType);

                expect(triggered).toBe(true);
            });
        });
    });
});
//# sourceMappingURL=EventType.test.js.map
