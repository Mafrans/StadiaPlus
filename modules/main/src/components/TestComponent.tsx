import React from 'react';
import AbstractComponent, { DefaultProps, DefaultState } from './AbstractComponent';

export default class TestComponent extends AbstractComponent<DefaultProps, DefaultState> {
    constructor() {
        super({
            name: "Test Component",
            useReact: true
        });
    }

    async onStart() {}

    async onUpdate() {
        this.updateRenderer();
    }

    onRender(): { query: string; node: React.ReactNode } {
        return {
            query: '.CVVXfc',
            node: <button>Test Button</button>
        }
    }
}


