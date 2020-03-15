import { Component } from './Component';

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
        this.components.forEach(component => {
            if (!component.enabled) component.load();
        });
        this.startTimer();
    }

    /**
     * Stops the component loader.
     */
    stop() {
        this.components.forEach(component => {
            if (component.enabled) component.unload();
        });
        this.stopTimer();
    }

    private startTimer() {
        const self = this;

        this.timer = setInterval(() => {
            self.components.forEach(component => {
                if(component.enabled) component.onUpdate();
            });
        }, 1000);
    }

    private stopTimer() {
        clearInterval(this.timer);
    }
}