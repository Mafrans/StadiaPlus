import React from 'react';
import ReactDOM from 'react-dom';
import Logger from '../Logger';
import Util from '../Util';

/**
 * Default React property interface for Stadia+ Components
 */
export interface DefaultProps {

}

/**
 * Default React state interface for Stadia+ Components
 */
export interface DefaultState {
    /**
     * The current web renderer element, used to identify where an element should be in the DOM
     * @default null
     */
    renderer: HTMLElement | null
}

/**
 * Abstract base component class for Stadia+ components, supports React.
 *
 * @abstract
 * @augments React.Component
 * @author Mafrans
 * @example
 * class ExampleComponent extends AbstractComponent<DefaultProps, DefaultState> {
 *     constructor() {
 *         super({ name: "Example Component" });
 *     }
 *
 *     async onStart() {
 *         Logger.info("Hello Stadia!");
 *     }
 * }
 *
 *
 * @example
 * \@ReactComponent
 * class ExampleReactComponent extends AbstractComponent<DefaultProps, DefaultState> {
 *     constructor() {
 *         super({ name: "Example Component" });
 *     }
 *
 *     async onStart() {
 *         Logger.info("Hello Stadia!");
 *     }
 * }
 *
 */
export default class AbstractComponent<A extends DefaultProps, B extends DefaultState> extends React.Component<A, B> {

    /**
     * Whether this component is a React component or not
     * Do not edit directly, instead see {@link @ReactComponent}
     * @see @ReactComponent
     * @default false
     */
    public __useReact = false;

    /**
     * The name of this component
     * @default undefined
     */
    public name: string;

    /**
     * Base constructor for all components, includes
     * @param {{ name: string }} data
     * @param {A extends DefaultProps} props
     * @see DefaultProps
     */
    constructor(data: { name: string }, props?: A) {
        super(props !== undefined ? props : {} as A);
        this.name = data.name;

        // TODO: Not safe, find better solution
        this.state = {
            renderer: null
        } as B

        this.__start().then(() => {
            setInterval(this.__tick.bind(this), 1000)
        });
    }

    /**
     * Internal method used to start components, overriding may cause issues.
     * @see onStart
     */
    public async __start() {
        Logger.component(`Component ${this.name} has been enabled`);
        await this.onStart();
    }

    /**
     * Internal method used to update components, overriding may cause issues.
     * @see onUpdate
     */
    public async __tick() {
        await this.onUpdate();
    }

    /**
     * Updates the renderer state. Relies on heavy querying, so should be used as sparingly as possible.
     */
    public async updateRenderer() {
        if (this.state.renderer?.style.opacity === '1') return;

        await Util.updateRenderer();
        if (this.__useReact && Util.renderer !== this.state.renderer) {

            this.setState(state => ({ renderer: Util.renderer }));
        }
    }

    /**
     * @deprecated React render function, overriding may cause issues.
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

    /**
     * Abstract async Start event, override for all your startup needs
     * @example
     * async onStart() {
     *     console.log('This message is sent when the component is started');
     * }
     */
    async onStart(): Promise<void> {}

    /**
     * Abstract async Update event, override for all your continuous update needs
     * @example
     * async onUpdate() {
     *     console.log('This message is sent every second');
     * }
     */
    async onUpdate(): Promise<void> {}

    /**
     * Abstract React Render event, override for all your react needs
     * @return {{ query: string, node: React.ReactNode }} a response including the css query of the node's parent, as well as the JSX node.
     * @example
     * onRender(): { query: string; node: React.ReactNode } {
     *     return {
     *         query: '.CVVXfc',
     *         node: (
     *             <p>Hello Stadia!</p>
     *         ),
     *     }
     * }
     */
    onRender(): { query: string, node: React.ReactNode } | null { return null }
}