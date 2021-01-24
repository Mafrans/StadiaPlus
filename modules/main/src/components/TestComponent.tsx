import React from 'react';
import AbstractComponent, { DefaultProps, DefaultState } from './AbstractComponent';
import ReactComponent from '../decorators/@ReactComponent';

@ReactComponent
export default class TestComponent extends AbstractComponent<DefaultProps, DefaultState> {
    constructor() {
        super({ name: "Test Component" });
    }

    async onStart() {}

    async onUpdate() {
        this.updateRenderer();
        console.log(this.__useReact);
    }

    onRender(): { query: string; node: React.ReactNode } {
        return {
            query: '.CVVXfc',
            node: <button>Test Button</button>
        }
    }
}


