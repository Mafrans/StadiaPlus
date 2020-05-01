import { Component } from '../Component';
import Logger from '../Logger';
import { Language } from '../Language';
import { UIButton } from '../ui/UIButton';
import Util from '../Util';

const { chrome } = window as any;

/**
 * A simple clock displayed in the Stadia Menu.
 *
 * @export the Clock type.
 * @class Clock
 * @extends {Component}
 */
export class AllowWindowedMode extends Component {
    /**
     * The name of the Component.
     */
    tag: string = 'allow-windowed-mode';

    /**
     * The [[UIButton]] used to toggle windowed mode.
     */
    button: UIButton;

    windowed: boolean = false;

    constructor() {
        super();

        const self = this;
        window.addEventListener(
            'fullscreenchange',
            function(event: Event) {
                if (self.windowed) {
                    event.stopPropagation();
                }
            },
            true
        );
    }

    enterWindowed(): void {
        this.windowed = true;
        document.exitFullscreen();
    }

    exitWindowed(): void {
        this.windowed = false;
        document.documentElement.requestFullscreen();
    }

    /**
     * Called on startup, initializes important variables.
     */
    onStart(): void {
        Logger.component(
            Language.get('component.enabled', { name: this.name })
        );
        this.active = true;

        const icon = chrome.runtime.getURL('images/icons/windowed.svg');
        this.button = new UIButton(
            icon,
            Language.get('allow-windowed-mode.button-label.windowed'),
            this.id
        );
    }

    /**
     * Called on stop, makes sure to dispose of elements and variables.
     */
    onStop(): void {
        this.exitWindowed();
        this.active = false;
    }

    updateButton(): void {
        const icon = chrome.runtime.getURL('images/icons/windowed.svg');
        const icon_exit = chrome.runtime.getURL(
            'images/icons/windowed_exit.svg'
        );

        if (this.windowed) {
            this.button.setIcon(icon_exit);
            this.button.setTitle(
                Language.get('allow-windowed-mode.button-label.fullscreen')
            );
        } else {
            this.button.setIcon(icon);
            this.button.setTitle(
                Language.get('allow-windowed-mode.button-label.windowed')
            );
        }
    }

    eventsAdded: boolean = false;
    onUpdate(): void {
        if (Util.isMenuOpen() && Util.isInGame()) {
            if (!this.exists()) {
                this.updateRenderer();

                const self = this;
                this.button.create(() => {
                    if (!this.eventsAdded) {
                        self.button.button.addEventListener('click', () => {
                            if (self.windowed) {
                                self.exitWindowed();
                            } else {
                                self.enterWindowed();
                            }
                            self.updateButton();
                        });
                        this.eventsAdded = true;
                    }
                });
            }

            if (!this.button.container.exists()) {
                this.button.container.create();
            }
        }
    }
}
