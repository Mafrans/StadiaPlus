import { Component } from '../Component';
import Logger from '../Logger';
import Util from '../Util';

export class Ratings extends Component {

    name: string = "Ratings";

    element: HTMLElement;

    constructor() {
        super();

        this.createElement();
    }

    createElement() {
    }

    onStart(): void {
        this.enabled = true;
        this.element.id = this.id;

        Logger.component('Component', this.name, 'has been enabled');
    }

    onStop(): void {
        this.enabled = false;
        this.element.remove();
        Logger.component('Component', this.name, 'has been disabled');
    }

    onUpdate() {
        // Only update the clock when it's visible
        if(Util.isMenuOpen()) {
            if(!this.exists()) {
            }
        }
    }
}
