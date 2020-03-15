import { Component } from '../Component';
import Logger from '../Logger';
import Util from '../Util';

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
    name: string = "Clock";

    /**
     * The clock element.
     */
    element: HTMLElement;

    /**
     * The element containing the clock.
     */
    container: HTMLElement;

    /**
     * Stadia's menu bar element, used to know when the player has opened the menu.
     */
    menuElement: HTMLElement;

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
        this.enabled = true;
        this.element.id = this.id;
        this.container = document.querySelector('.hxhAyf');
        this.menuElement = document.querySelector('.X1asv');

        Logger.component('Component', this.name, 'has been enabled');
    }

    /**
     * Called on stop, makes sure to dispose of elements and variables.
     */
    onStop(): void {
        Logger.component('Component', this.name, 'has been disabled');
    }

    /**
     * Called every second, updates the element to match the clock.
     */
    onUpdate() {
        // Only update the clock when it's visible
        if(this.menuElement.style['opacity'] !== '0') {
            if(!this.exists() && this.container !== null) {
                this.container.prepend(this.element);
            }

            const time = new Date().toLocaleTimeString();
            window.requestAnimationFrame(() => {
                this.element.innerHTML = time;
            });
        }
    }
}
