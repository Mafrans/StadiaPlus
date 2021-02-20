import React from 'react';
import AbstractComponent, { DefaultProps, DefaultState } from './AbstractComponent';
import ReactComponent from '../decorators/@ReactComponent';
import Dropdown from './subcomponents/Dropdown';

@ReactComponent
export default class CodecSelectComponent extends AbstractComponent<DefaultProps, DefaultState> {
    constructor() {
        super({ name: "CodecSelectComponent" });
    }

    async onStart() {}

    async onUpdate() {
        this.updateRenderer();
    }

    onRender(): { query: string; node: React.ReactNode } {
        return {
            query: '.CVVXfc',
            node: (
                <Dropdown
                    style={{ width: 250 }}
                    options={[
                        'English',
                        'Deutsh',
                        'Español',
                        'Svenska',
                        'Pirate Speak'
                    ]}
                />
            )
        }
    }
}


