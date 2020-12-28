/* eslint-disable @typescript-eslint/no-empty-function */
import { Language } from './Language';
import Util from './util/Util';

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
    name = 'My Component';
    tag = 'component';

    /**
     * The Component's unique ID, automatically generated on load.
     */
    id = 'undefined';

    /**
     * A boolean keeping track of whether the Component should receive events or not.
     */
    active = false;

    enabled = false;
    renderer?: HTMLElement = Util.renderer;

    /**
     * This method is called whenever the component should start loading.
     */
    load(): void {
        this.name = Language.get(`${this.tag}.name`);
        this.id = `stadiaplus_${Math.floor(Math.random() * 999999)}`;
        this.updateRenderer();
        this.onStart();
    }

    updateRenderer(): void {
        Util.updateRenderer();
        this.renderer = Util.renderer;
    }

    /**
     * Returns whether this Component has an element in the current renderer
     *
     * @returns {boolean}
     */
    exists(): boolean {
        if (Util.renderer == null || Util.renderer.style.opacity === '0') return false;
        return Util.renderer.querySelector(`#${this.id}`) !== null;
    }

    /**
     * Returns whether this Component has an element anywhere in the DOM
     *
     * @returns {boolean}
     */
    existsAnywhere(): boolean {
        return document.querySelector(`#${this.id}`) !== null;
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
