import { Component } from '../Component';
import Logger from '../Logger';
import Util from '../util/Util';

export class Platform {
    static WINDOWS = 'Win32';
    static MACOS = 'MacIntel';
}

export class PasteFromClipboard extends Component {
    tag = 'paste-from-clipboard';

    protected target: HTMLInputElement | null = null;

    /**
     * Called on startup, initializes important variables.
     */
    onStart(): void {
        this.active = true;
    }

    /**
     * Called on stop, makes sure to dispose of elements and variables.
     */
    onStop(): void {
        this.active = false;
    }

    /**
     * Called once every second.
     */
    onUpdate(): void {
        super.onUpdate();

        if (Util.isInGame()) {
            this.updateRenderer();

            if (this.renderer === undefined) {
                Logger.error('Renderer is undefined');
                return;
            }

            const input: HTMLInputElement = this.renderer.getElementsByTagName('input')[0];

            if (input !== this.target) {
                if (undefined !== this.target) {
                    this.target?.removeEventListener('keydown', (...args) => this.keydownEventListener(...args));
                }
                this.target = input;
                this.target.addEventListener('keydown', (...args) => this.keydownEventListener(...args));
            }
        }
    }

    /**
     *  @param event
     */
    keydownEventListener(event: KeyboardEvent): void {
        let ctrlKey: boolean;
        switch (navigator.platform) {
            case Platform.WINDOWS:
                ctrlKey = event.ctrlKey;
                break;

            case Platform.MACOS:
                ctrlKey = event.metaKey;
                break;

            default:
                ctrlKey = event.ctrlKey;
                break;
        }

        if (ctrlKey && event.code === 'KeyV') {
            void navigator.clipboard.readText().then((data: string) => {
                event.target?.dispatchEvent(new InputEvent('input', {
                    // InputEventInit
                    data,
                    inputType: 'insertText',
                    isComposing: false,

                    // UIEventInit
                    view: null,

                    // EventInit
                    bubbles: true,
                    cancelable: false,
                    composed: true,
                }));
            });
        }
    }
}
