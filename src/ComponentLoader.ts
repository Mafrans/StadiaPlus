import { Component } from './Component';
import { SyncStorage } from './Storage';
import Logger from './Logger';

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
    timer = 0;

    constructor() {
        this.components = [];
    }

    /**
     * Registers a new component.
     *
     * @param {Component} component the component to register.
     */
    register(component: Component): void {
        this.components.push(component);
    }

    /**
     * Unregisters a component.
     *
     * @param {Component} component
     */
    unregister(component:Component): void {
        this.components.filter((e) => e.id !== component.id);
    }

    /**
     * Starts the component loader.
     */
    async start(): Promise<void> {
        let storage = await SyncStorage.COMPONENTS.get() as {[key: string]: { enabled: boolean }};

        if (storage == null) {
            storage = {};
        }

        this.components.forEach((component) => {
            if (storage[component.tag] == null) {
                storage[component.tag] = { enabled: true };
            }

            try {
                component.enabled = storage[component.tag].enabled;
                if (component.enabled && !component.active) component.load();
            } catch (e) {
                Logger.error(e);
            }
        });

        void SyncStorage.COMPONENTS.set(storage);
        this.startTimer();
    }

    /**
     * Stops the component loader.
     */
    stop(): void {
        this.components.forEach((component) => {
            if (component.active) component.unload();
        });
        this.stopTimer();
    }

    private startTimer() {
        this.timer = setInterval(() => {
            this.components.forEach((component) => {
                if (component.active) component.onUpdate();
            });
        }, 1000);
    }

    private stopTimer() {
        clearInterval(this.timer);
    }
}
