import { Component } from '../Component';
import Logger from '../Logger';
import Util from '../Util';
import './styles/LibraryFilter.scss';

const { chrome } = window as any;
const iconVisible = chrome.runtime.getURL('images/icons/visibility.svg');
const iconInvisible = chrome.runtime.getURL('images/icons/visibility_off.svg');

/**
 * A simple clock displayed in the Stadia Menu.
 *
 * @export the Clock type.
 * @class Clock
 * @extends {Component}
 */
export class LibraryFilter extends Component {

    /**
     * The name of the Component.
     */
    name: string = "Library Filter";

    /**
     * The clock element.
     */
    template: HTMLElement;

    constructor() {
        super();
        this.template = document.createElement('div');
        this.template.classList.add('stadiaplus_libraryfilter-eye');
    }

    /**
     * Creates a simple <span>, adds the right classes, and stores it in [@link #element]
     */
    createAllWrappers() {
        setTimeout(()=>{
            const gameTiles = document.querySelectorAll(".GqLi4d");
            gameTiles.forEach(tile => {
                this.createWrapper(tile);
            })
        }, 20000)
    }

    createWrapper(element: Element) {
        const wrapper = document.createElement('div');
        wrapper.classList.add('stadiaplus_libraryfilter-wrapper');

        const icon = document.createElement('div');
        icon.classList.add('stadiaplus_libraryfilter-icon');
        icon.innerHTML = 'visibility';

        element.parentNode.insertBefore(wrapper, element);
        wrapper.appendChild(icon);
        wrapper.appendChild(element);
        
        icon.style.marginLeft = element.clientWidth - icon.clientWidth + 'px';
    }

    /**
     * Called on startup, initializes important variables.
     */
    onStart(): void {
        this.enabled = true;
        this.createAllWrappers();

        Logger.component('Component', this.name, 'has been enabled');
    }

    /**
     * Called on stop, makes sure to dispose of elements and variables.
     */
    onStop(): void {
        this.enabled = false;
        document.querySelectorAll('.stadiaplus_libraryfilter-eye').forEach(e => e.remove());
        Logger.component('Component', this.name, 'has been disabled');
    }

    /**
     * Called every second, updates the element to match the clock.
     */
    onUpdate() {
    }
}
