export class EventTracker {
    target: EventTarget;

    private original: any;
    constructor(target: EventTarget, _listener: ((type: string, listener?: any, options?: any) => any) = (() => {})) {
        this.original = target.addEventListener;
        this.target = target;

        target.addEventListener = function(type, listener, options?) {
            _listener(type, listener, options);
            this.original(type, listener, options);
        };
    }

    remove() {
        this.target.addEventListener = this.original;
    }
}