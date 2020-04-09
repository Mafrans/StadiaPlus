import { Component } from '../Component';
import Logger from '../Logger';
import Util from '../Util';
import './styles/StoreFilter.scss';
import { Database } from '../Database';

/**
 * A simple clock displayed in the Stadia Menu.
 *
 * @export the Clock type.
 * @class Clock
 * @extends {Component}
 */
export class StoreFilter extends Component {

    /**
     * The name of the Component.
     */
    name: string = "Store Filter";

    /**
     * The clock element.
     */
    element: HTMLElement;
    gameTemplate: HTMLElement;
    database: Database;

    constructor(database: Database) {
        super();
        this.database = database;

        this.createElement();
    }

    /**
     * Creates a simple <span>, adds the right classes, and stores it in [@link #element]
     */
    createElement() {
        this.element = document.createElement('div');
        this.element.classList.add('stadiaplus_storefilter');
        this.element.id = this.id;
        this.element.innerHTML = `
            <div class='bar'>
                <input type='text' id='${this.id}-search'>
            </div>
            <div class='games' id='${this.id}-games'>

            </div>
        `;

        this.gameTemplate = document.createElement('div');
        this.gameTemplate.classList.add('stadiaplus_storefilter-game');
        this.gameTemplate.innerHTML = `
            <img src='https://loremflickr.com/640/360'>
            <div class='detail'>
                <h6>Lorem Ipsum</h6>
            </div>
        `

        for()
    }

    /**
     * Called on startup, initializes important variables.
     */
    onStart(): void {
        this.enabled = true;

        Logger.component('Component', this.name, 'has been enabled');
    }

    /**
     * Called on stop, makes sure to dispose of elements and variables.
     */
    onStop(): void {
        this.enabled = false;
        this.element.remove();
        Logger.component('Component', this.name, 'has been disabled');
    }

    /**
     * Called every second, updates the element to match the clock.
     */
    onUpdate() {
        // Only update the clock when it's visible
        if(Util.isInStore()) {
            // if(!this.exists()) {
            //     const container = document.querySelector('.hxhAyf');
            //     container.prepend(this.element);
            // }

            // const time = new Date().toLocaleTimeString();
            // window.requestAnimationFrame(() => {
            //     this.element.innerHTML = time;
            // });
        }
    }
}
