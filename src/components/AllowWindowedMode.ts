import { Component } from '../Component';
import Logger from '../Logger';
import { Language } from '../Language';
import { UIButton } from '../ui/UIButton';
import Util from '../util/Util';

/**
 * A button allowing users to play Stadia in windowed mode.
 *
 * @export the AllowWindowedMode type.
 * @class AllowWindowedMode
 * @extends {Component}
 */
export class AllowWindowedMode extends Component {
    /**
     * The component tag, used in language files.
     */
    tag = 'allow-windowed-mode';

    /**
     * The [[UIButton]] used to toggle windowed mode.
     */
    button!: UIButton;

    /**
     * Whether windowed mode is enabled or not
     */
    windowed = false;

    constructor() {
        super();

        /**
         * Main event, stops built-in fullscreen events from reaching
         * Stadia whenever windowed mode is enabled.
         * */
        window.addEventListener(
            'fullscreenchange',
            (event: Event) => {
                if (this.windowed) {
                    event.stopPropagation();
                }
            },
            true,
        );
    }

    /**
     * Enters windowed mode.
     *
     * @memberof AllowWindowedMode
     */
    enterWindowed(): void {
        this.windowed = true;
        void document.exitFullscreen();
    }

    /**
     * Exits windowed mode
     *
     * @memberof AllowWindowedMode
     */
    exitWindowed(): void {
        this.windowed = false;
        void document.documentElement.requestFullscreen();
    }

    /**
     * Called on startup, initializes important variables.
     *
     * @memberof AllowWindowedMode
     */
    onStart(): void {
        Logger.component(
            Language.get('component.enabled', { name: this.name }),
        );
        this.active = true;

        const icon = chrome.runtime.getURL('images/icons/windowed.svg');
        this.button = new UIButton(
            icon,
            Language.get('allow-windowed-mode.button-label.windowed'),
            this.id,
        );
    }

    /**
     * Called on stop, makes sure to dispose of elements and variables.
     *
     * @memberof AllowWindowedMode
     */
    onStop(): void {
        this.exitWindowed();
        this.active = false;
    }

    /**
     * Update button labels and icons to fit current mode.
     *
     * @memberof AllowWindowedMode
     */
    updateButton(): void {
        const icon = chrome.runtime.getURL('images/icons/windowed.svg');
        const exitIcon = chrome.runtime.getURL(
            'images/icons/windowed_exit.svg',
        );

        if (this.windowed) {
            this.button.setIcon(exitIcon);
            this.button.setTitle(
                Language.get('allow-windowed-mode.button-label.fullscreen'),
            );
        } else {
            this.button.setIcon(icon);
            this.button.setTitle(
                Language.get('allow-windowed-mode.button-label.windowed'),
            );
        }
    }

    // Whether events have been added already or not.
    eventsAdded = false;

    /**
     * Called once every second, updates component elements and variables
     *
     * @memberof AllowWindowedMode
     */
    onUpdate(): void {
        // If menu is open and a game is playing.
        if (Util.isMenuOpen() && Util.isInGame()) {
            // If the button doesn't already exist in the current renderer
            if (!this.exists()) {
                // Check for new renderers
                this.updateRenderer();

                // Create the button instance
                this.button.create(() => {
                    // If events are already added, don't add them again
                    if (!this.eventsAdded) {
                        this.button.onPressed(() => {
                            if (this.windowed) {
                                this.exitWindowed();
                            } else {
                                this.enterWindowed();
                            }
                            this.updateButton();
                        });
                        this.eventsAdded = true;
                    }
                });
            }

            if (!this.button.container?.exists()) {
                this.button.container?.create();
            }
        } else if (this.existsAnywhere()) {
            this.button.destroy();
        }
    }
}
