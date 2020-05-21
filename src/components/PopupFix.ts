import { Component } from '../Component';
import Logger from '../Logger';
import Util from '../Util';
import './styles/PopupFix.scss';
import { Language } from '../Language';

/**
 * A simple fix that solves an issue where notifications would hide specific buttons
 *
 * @export the PopupFix type.
 * @class PopupFix
 * @extends {Component}
 */
export class PopupFix extends Component {
    /**
     * The component tag, used in language files.
     */
    tag: string = 'popup-fix';

    /**
     * The popup element.
     */
    popup: HTMLElement;

    /**
     * Is in game.
     */
    inGame: boolean;

    constructor() {
        super();
    }

    /**
     * Called on startup, initializes important variables.
     * 
     * @memberof PopupFix
     */
    onStart(): void {
        this.active = true;
        this.popup = document.querySelector('.zLoQpb');
        
        if(!Util.isInGame()) {
            this.popup.classList.add('offset');
            this.inGame = false;
        }

        Logger.component(Language.get('component.enabled', {'name': this.name}));
    }

    /**
     * Called on stop, makes sure to dispose of elements and variables.
     * 
     * @memberof PopupFix
     */
    onStop(): void {
        this.active = false;
        this.popup.classList.remove('offset');
        Logger.component(Language.get('component.disabled', {'name': this.name}));
    }

    onUpdate() {
        if(Util.isInGame() && this.popup.classList.contains('offset') && !this.inGame) {
            this.popup.classList.remove('offset');
            this.inGame = true;
        }
    }
}
