import { Component } from '../Component';
import Logger from '../Logger';
import { Language } from '../Language';
import { UIButton } from '../ui/UIButton';

const { chrome } = (window as any);

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

    /**
     * The [[UIButton]] used to toggle windowed mode.
     */
    button: UIButton;

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
        
        const icon = chrome.runtime.getURL('images/icons/network-monitor.svg');
        this.button = new UIButton(icon, Language.get('allow-windowed-mode.button-label'), this.id + '-button');
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
