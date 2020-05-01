import { Component } from '../Component';
import Logger from '../Logger';
import { Language } from '../Language';

/**
 * A simple clock displayed in the Stadia Menu.
 *
 * @export the Clock type.
 * @class Clock
 * @extends {Component}
 */
export class AllowWindowedMode extends Component {

    /**
     * The name of the Component.
     */
    tag: string = 'allow-windowed-mode';

    constructor() {
        super();

        window.addEventListener("fullscreenchange", function (event: Event) {
            if(this.active) {
                event.stopPropagation();
            }
        }.bind(this), true);
    }

    activate(): void {
        this.active = true;
    }

    deactivate(): void {
        this.active = false;
    }

    /**
     * Called on startup, initializes important variables.
     */
    onStart(): void {
        Logger.component(Language.get('component.enabled', {'name': this.name}));
    }

    /**
     * Called on stop, makes sure to dispose of elements and variables.
     */
    onStop(): void {
        this.deactivate();
    }

    /**
     * Called every second, updates the element to match the clock.
     */
    onUpdate() {}
}
