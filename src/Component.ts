import Logger from "./Logger";
import { SyncStorage } from "./Storage";
import { Language } from "./Language";
import { StadiaGameDB } from "./StadiaGameDB";

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
    tag: string = "component";

    /**
     * The Component's unique ID, automatically generated on load.
     */
    id: string;

    /**
     * A boolean keeping track of whether the Component should receive events or not.
     */
    active: boolean;

    enabled: boolean;

    renderer: HTMLElement;

    /**
     * This method is called whenever the component should start loading.
     */
    load(): void {
        this.name = Language.get(this.tag + '.name');
        this.id = 'stadiaplus_' + Math.floor(Math.random() * 999999);
        this.updateRenderer();
        this.onStart();
    }

    updateRenderer(): void {
        const renderers = document.querySelectorAll('.lhsE4e>c-wiz');
        this.renderer = renderers.item(0) as HTMLElement;
        if(renderers.length > 1) {
            this.renderer = (Array as any).from(renderers).find((renderer: HTMLElement) => renderer.style.opacity === '1');
        }
    }

    
    /**
     * Returns whether this Component has an element in the DOM
     *
     * @returns {boolean}
     */
    exists(): boolean {
        if(this.renderer.style.opacity === '0') return false;
        return this.renderer.querySelector('#' + this.id) !== null;
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
