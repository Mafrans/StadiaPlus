import { Component } from '../Component';
import Logger from '../Logger';
import Util from '../Util';
import './styles/Clock.scss';
import { Language } from '../Language';

/**
 * A simple clock displayed in the Stadia Menu.
 *
 * @export the Clock type.
 * @class Clock
 * @extends {Component}
 */
export class Clock extends Component {

    /**
     * The name of the Component.
     */
    name: string = Language.get('clock.name');

    /**
     * The clock element.
     */
    element: HTMLElement;

    constructor() {
        super();

        this.createElement();
    }

    /**
     * Creates a simple <span>, adds the right classes, and stores it in [@link #element]
     */
    createElement() {
        this.element = document.createElement('span');
        this.element.classList.add('stadiaplus_clock');
    }

    /**
     * Called on startup, initializes important variables.
     */
    onStart(): void {
        this.active = true;
        this.element.id = this.id;

        Logger.component(Language.get('component.enabled', {'name': this.name}));
    }

    /**
     * Called on stop, makes sure to dispose of elements and variables.
     */
    onStop(): void {
        this.active = false;
        this.element.remove();
        Logger.component(Language.get('component.disabled', {'name': this.name}));
    }

    /**
     * Called every second, updates the element to match the clock.
     */
    onUpdate() {
        // Only update the clock when it's visible
        if(Util.isMenuOpen()) {
            if(!this.exists()) {
                const container = document.querySelector('.hxhAyf');
                container.prepend(this.element);
            }

            const time = new Date().toLocaleTimeString();
            window.requestAnimationFrame(() => {
                this.element.innerHTML = time;
            });
        }
    }
}
