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

    renderer: HTMLElement;

    /**
     * This method is called whenever the component should start loading.
     */
    load(): void {
        this.id = 'stadiaplus_' + Math.floor(Math.random() * 999999);
        this.updateRenderer();
        this.onStart();
    }

    updateRenderer(): void {
        const renderers = document.querySelectorAll('.lhsE4e>c-wiz');
        for(let i = 0; i < renderers.length; i++) {
            const renderer = renderers[i] as HTMLElement;
            if(renderer.style.opacity !== '0') {
                this.renderer = renderer;
            }
        }
    }

    
    /**
     * Returns whether this Component has an element in the DOM
     *
     * @returns {boolean}
     */
    exists(): boolean {
        if(this.renderer.style.opacity === '0') return false;
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
