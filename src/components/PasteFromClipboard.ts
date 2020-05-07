import {Component} from "../Component";
import Util from '../Util';

export class Platform {
    static WINDOWS: string = "Win32";
    static MACOS: string = "MacIntel";
}

export class PasteFromClipboard extends Component
{
    tag: string  = 'paste-from-clipboard';

    protected target: HTMLInputElement;

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
            const input: HTMLInputElement = this.renderer.getElementsByTagName('input')[0];

            if (input != this.target) {
                if (undefined != this.target) {
                    this.target.removeEventListener('keydown', this.keydownEventListener);
                }
                this.target = input;
                this.target.addEventListener('keydown', this.keydownEventListener);
            }
        }
    }

    /**
     *  @param event
     */
    keydownEventListener(event: KeyboardEvent): void {
        let ctrlKey: boolean;
        switch(navigator.platform) {
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

        if (ctrlKey && 'KeyV' == event.code) {
            navigator.clipboard.readText().then(function(data: string) {
                event.target.dispatchEvent(new InputEvent('input', {
                    // InputEventInit
                    data,
                    inputType: "insertText",
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
