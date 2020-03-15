import Logger from "./Logger";

/**
 * A generic component of Stadia+
 *
 * @export the Component type.
 * @class Component
 */
export class Component {
    /**
     * The Component's name.
     */
    name: string = 'My Component';

    /**
     * The Component's unique ID, automatically generated on load.
     */
    id: string;

    /**
     * A boolean keeping track of whether the Component should receive events or not.
     */
    enabled: boolean;

    /**
     * This method is called whenever the component should start loading.
     */
    load(): void {
        this.id =
            this.name.toLowerCase().replace(/\s/g, '') + '-' + Math.floor(Math.random() * 999999);

        this.onStart();
    }

    
    /**
     * Returns whether this Component has an element in the DOM
     *
     * @returns {boolean}
     */
    exists(): boolean {
        return document.querySelector('#' + this.id) !== null;
    }

    /**
     * This method is called whenever the component is unloading.
     */
    unload(): void {
        this.onStop();
    }

    /**
     * This method is called when the Component should start.
     */
    onStart(): void {}

    /**
     * This method is called when the Component should stop.
     */
    onStop(): void {}

    /**
     * This method is called once every second.
     */
    onUpdate(): void {}
}
