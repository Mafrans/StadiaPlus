/**
 *  JS Event tracker, doesn't work unless we use a bunch of weird
 *  types and unsafe stuff.
 */

/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/unbound-method */
export class EventTracker {
    target?: EventTarget;

    private original: (
        type: string,
        listener: EventListener | EventListenerObject | null,
        options?: boolean | AddEventListenerOptions | undefined
    ) => void;

    constructor(
        target: EventTarget,
        _listener: (
            type: string,
            listener?: EventListenerOrEventListenerObject | null,
            options?: AddEventListenerOptions | boolean) => () => void,
    ) {
        this.original = target.addEventListener;
        this.target = target;

        const { original } = this;
        target.addEventListener = (type, listener, options?) => {
            _listener(type, listener, options);
            original(type, listener, options);
        };
    }

    remove(): void {
        if (this.target === undefined) return;
        this.target.addEventListener = this.original;
    }
}
