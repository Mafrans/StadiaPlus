import { Component } from '../Component';
import Logger from '../Logger';

export class Clock extends Component {
    name: string;
    element: HTMLElement;
    container: HTMLElement;
    menuElement: HTMLElement;

    constructor() {
        super();

        this.name = "Clock";
        this.createElement();
    }

    createElement() {
        this.element = document.createElement('span');
        this.element.classList.add('stadiaplus_clock');
    }

    onStart(): void {
        this.enabled = true;
        this.element.id = this.id;
        this.container = document.querySelector('.hxhAyf');
        this.menuElement = document.querySelector('.X1asv');

        Logger.component('Component', this.name, 'has been enabled');
    }

    onStop(): void {
        Logger.component('Component', this.name, 'has been disabled');
    }

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
