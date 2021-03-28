import React from 'react';
import ReactDOM from 'react-dom';
import Logger from '../Logger';
import Util from '../Util';
import StadiaPage from '../StadiaPage';
import { StadiaSelectors } from '../StadiaSelectors';
import StadiaPlusDB from '../../../shared/StadiaPlusDB';

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

    /**
     * Whether the component is active or not
     */
    active?: boolean
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

    private config: ComponentConfig;

    /**
     * Base constructor for all components
     * @param { ComponentConfig } config
     * @param {A extends DefaultProps} props
     * @see DefaultProps
     */
    constructor(config?: ComponentConfig, props?: A) {
        super(props || {} as A);
        this.config = config || { name: 'Unknown Component' };

        // TODO: Not safe, find better solution
        this.state = {
            renderer: null
        } as B

        this.__start().then(() => {
            StadiaPlusDB.onConnect(() => this.onConnect());
            setInterval(this.__tick.bind(this), 1000);
        });
    }

    /**
     * Internal method used to start components, overriding may cause issues.
     * @see onStart
     */
    public async __start() {
        const currentPage = StadiaPage.current();
        if (!this.matchPage()) return;

        Logger.component(`Component ${this.config.name} has been enabled`);

        this.setState(() => ({
            active: true
        }))
        await this.onStart();
    }

    /**
     * Internal method used to update components, overriding may cause issues.
     * @see onUpdate
     */
    public async __tick() {
        const currentPage = StadiaPage.current();
        if (!this.matchPage()) {
            if(this.state.active) {
                this.setState(() => ({
                    active: false
                }));
                void this.onStop();
                this.render();
            }
            return;
        }

        if (!this.state.active) {
            await this.__start();
        }
        await this.onUpdate();
    }

    public matchPage() {
        const currentPage = StadiaPage.current();
        const set = new Set(this.config.pageFilter);
        return this.config.pageFilter !== undefined && currentPage !== null && set.has(currentPage);
    }

    /**
     * Updates the renderer state. Relies on heavy querying, so should be used as sparingly as possible.
     */
    public async updateRenderer() {
        if (this.state.renderer?.style.opacity === '1') return;

        await Util.updateRenderer();
        if (this.config.useReact && Util.renderer !== this.state.renderer) {

            this.setState(state => ({ renderer: Util.renderer }));
        }
    }

    public static async startMutationListener() {
        Util.observe(document.querySelector(StadiaSelectors.RENDERER_CONTAINER)!, 'childList', Node.ELEMENT_NODE, (mutation, node) => {
            Util.renderer
        });
    }

    /**
     * @deprecated React render function, overriding may cause issues.
     * @see onRender
     */
    render() {
        if (!this.config.useReact || !this.state.active) return null;

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
     * Abstract async Start event, runs when the component is stopped
     * @example
     * async onStop() {
     *     console.log('This message is sent when the component is stopped');
     * }
     */
    async onStop(): Promise<void> {}


    /**
     * Abstract async Connect event, runs when the extension has connected to Stadia+
     * @example
     * async onConnect() {
     *     console.log('This message is sent when the component has connected');
     * }
     */
    async onConnect(): Promise<void> {}

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

type ComponentConfig = {
    /**
     * The name of this component
     * @default undefined
     */
    name: string,

    /**
     * Whether this component is a React component or not.
     * @default false
     *
     * @private
     */
    useReact?: boolean;

    /**
     * Whether this component is limited to certain Stadia pages,
     * the component will never update unless the current page matches the filter.
     * @default undefined
     *
     * @private
     */
    pageFilter?: StadiaPage[];
}