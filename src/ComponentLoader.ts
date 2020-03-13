import { Component } from './Component';

export class ComponentLoader {
    components: any[];

    constructor() {
        this.components = [];
    }

    register(component:Component) {
        this.components.push(component);
    }

    unregister(component:Component) {
        this.components.filter(e => { return e.id !== component.id });
    }

    start() {
        this.components.forEach(component => {
            if (component.enabled) component.onStart();
        });
    }

    stop() {
        this.components.forEach(component => {
            if (component.enabled) component.onStop();
        });
    }
}