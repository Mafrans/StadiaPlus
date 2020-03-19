import { Component } from '../Component';
import Logger from '../Logger';
import Util from '../Util';
import { UIButton } from '../ui/UIButton';
import { UIRow } from '../ui/UIRow';
import { UIComponent } from '../ui/UIComponent';
import './styles/UITab.scss';

const chrome: any = (window as any).chrome;

/**
 * A tab and button displayed in the Stadia Menu.
 *
 * @export the UITab type.
 * @class UITab
 * @extends {Component}
 */
export class NetworkMonitor extends Component {
    /**
     * The name of the Component.
     */
    name: string = 'Network Monitor';

    /**
     * The tab element.
     */
    element: HTMLElement;

    /**
     * The [[UIComponent]] used to display the tab.
     */
    component: UIComponent;

    /**
     * The [[UIButton]] used to open the tab.
     */
    button: UIButton;

    constructor() {
        super();
    }

    /**
     * Creates a [[UIComponent]] and a [[UIButton]]
     */
    createElement() {
        this.component = new UIComponent(
            'Network Monitor',
            `
                This feature is still being worked on, please wait for future updates.
            `,
            this.id,
        );

        const icon = chrome.runtime.getURL('images/icons/network-monitor.svg');
        this.button = new UIButton(icon, 'Monitor', this.id + '-button');
    }

    /**
     * Called on startup, initializes important variables.
     */
    onStart(): void {
        this.enabled = true;
        this.createElement();

        Logger.component('Component', this.name, 'has been enabled');
    }

    /**
     * Called on stop, makes sure to dispose of elements and variables.
     */
    onStop(): void {
        this.enabled = false;
        this.button.element.remove();
        this.button.destroy();
        this.component.element.remove();

        Logger.component('Component', this.name, 'has been disabled');
    }

    /**
     * Called every second, makes sure to create components if they don't already exist.
     */
    onUpdate() {
        // Only create components if the menu is open already.
        if (Util.isMenuOpen()) {
            if (!this.exists()) {
                this.component.create();

                const self = this;
                this.button.create(() => {
                    self.button.button.addEventListener('click', () => {
                        self.component.open();
                    });
                });
            }
        }
    }
}