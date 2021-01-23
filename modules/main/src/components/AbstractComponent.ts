import React from 'react';
import ReactDOM from 'react-dom';
import Logger from '../Logger';
import Util from '../Util';

export interface DefaultProps {

}

export interface DefaultState {
    renderer: HTMLElement | null
}

export default class AbstractComponent<A extends DefaultProps, B extends DefaultState> extends React.Component<A, B> {

    public __useReact = false;
    public name: string;

    constructor(data: { props?: A, name: string }) {
        super(data.props !== undefined ? data.props : {} as A);
        this.name = data.name;

        // TODO: Not safe, find better solution
        this.state = {
            renderer: null
        } as B

        this.__start();
        setInterval(() => this.__tick(), 1000);
    }

    public async __start() {
        Logger.component(`Component ${this.name} has been enabled`);
        this.onStart();
    }

    public async __tick() {
        console.log("tick");
        this.onUpdate();
    }

    public async updateRenderer() {
        await Util.updateRenderer();
        if (this.__useReact) {
            this.setState(state => ({ renderer: Util.renderer }));
        }
    }

    /**
     * @deprecated React render function, only override this if you're 100% sure you know what you're doing.
     * @see onRender
     */
    render() {
        if (!this.__useReact) return null;

        if (this.state.renderer !== null) {
            const renderData = this.onRender();
            if(renderData === null) return null;

            const target = this.state.renderer.querySelector(renderData.query);
            if (target !== null) {
                return ReactDOM.createPortal(
                    renderData.node,
                    <Element>this.state.renderer.querySelector(renderData.query),
                );
            }
        }
        return null;
    }

    async onStart(): Promise<void> {}
    async onUpdate(): Promise<void> {}
    onRender(): { query: string, node: React.ReactNode } | null { return null }
}