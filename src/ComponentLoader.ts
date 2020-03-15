import { Component } from './Component';

export class ComponentLoader {
    components: Component[];
    timer: number;

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
            if (!component.enabled) component.onStart();
        });
        this.startTimer();
    }

    stop() {
        this.components.forEach(component => {
            if (component.enabled) component.onStop();
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