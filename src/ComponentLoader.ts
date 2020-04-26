import { Component } from './Component';
import { SyncStorage } from './Storage';
import { Language } from './Language';

/**
 * A utility class responsible for loading [[Component|Components]] and delivering events.
 *
 * @export the ComponentLoader type.
 * @class ComponentLoader
 */
export class ComponentLoader {
    /**
     * A list of all registered components.
     */
    components: Component[];
    timer: number;

    constructor() {
        this.components = [];
    }

    /**
     * Registers a new component.
     *
     * @param {Component} component the component to register.
     */
    register(component:Component) {
        this.components.push(component);
    }

    /**
     * Unregisters a component.
     *
     * @param {Component} component
     */
    unregister(component:Component) {
        this.components.filter(e => { return e.id !== component.id });
    }

    /**
     * Starts the component loader.
     */
    start() {
        SyncStorage.COMPONENTS.get((result) => {
            let storage = result.components;
            if(storage === undefined) {
                storage = {};
            }

            for(const component of this.components) {
                if(storage[component.tag] === undefined) {
                    storage[component.tag] = {};
                }

                if(storage[component.tag].enabled === undefined) {
                    storage[component.tag].enabled = true;
                }

                component.enabled = storage[component.tag].enabled;
                if (component.enabled && !component.active) component.load();
            };

            SyncStorage.COMPONENTS.set(storage);
            this.startTimer();
        })
    }

    /**
     * Stops the component loader.
     */
    stop() {
        this.components.forEach(component => {
            if (component.active) component.unload();
        });
        this.stopTimer();
    }

    private startTimer() {
        const self = this;

        this.timer = setInterval(() => {
            self.components.forEach(component => {
                if(component.active) component.onUpdate();
            });
        }, 1000);
    }

    private stopTimer() {
        clearInterval(this.timer);
    }
}