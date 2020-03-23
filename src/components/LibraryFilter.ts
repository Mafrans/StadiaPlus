import { Component } from '../Component';
import Logger from '../Logger';
import Util from '../Util';
import './styles/LibraryFilter.scss';
import { Snackbar } from '../ui/Snackbar';

const { chrome } = window as any;
const iconVisible = chrome.runtime.getURL('images/icons/visibility.svg');
const iconInvisible = chrome.runtime.getURL('images/icons/visibility_off.svg');

/**
 * A simple clock displayed in the Stadia Menu.
 *
 * @export the Clock type.
 * @class Clock
 * @extends {Component}
 */
export class LibraryFilter extends Component {
    /**
     * The name of the Component.
     */
    name: string = 'Library Filter';

    /**
     * The clock element.
     */
    template: HTMLElement;
    games: any = {};
    snackbar: Snackbar;

    constructor(snackbar: Snackbar) {
        super();
        this.snackbar = snackbar;
        this.setStorage();

        this.template = document.createElement('div');
        this.template.classList.add('stadiaplus_libraryfilter-eye');
    }

    /**
     * Creates a simple <span>, adds the right classes, and stores it in [@link #element]
     */
    createAllWrappers() {
        const self = this;
        setTimeout(() => {
            const gameTiles = document.querySelectorAll('.GqLi4d');
            this.getStorage(() => {
                gameTiles.forEach((tile) => {
                    const uuid = tile
                        .getAttribute('jslog')
                        .split('; ')[1]
                        .substring(3);
                    self.createWrapper(tile, uuid);
                });
            });
        }, 7500);
    }

    createWrapper(element: Element, uuid: string) {
        const wrapper = document.createElement('div');
        wrapper.classList.add('stadiaplus_libraryfilter-wrapper');
        wrapper.id = this.id + '-' + uuid;

        const icon = document.createElement('div');
        icon.classList.add('stadiaplus_libraryfilter-icon');
        icon.innerHTML = 'visibility';

        element.parentNode.insertBefore(wrapper, element);
        wrapper.appendChild(icon);
        wrapper.appendChild(element);

        if (!this.games.hasOwnProperty(uuid)) {
            this.games[uuid] = { visible: true };
        } else if (!this.games[uuid].visible) {
            wrapper.classList.add('closed');
        }

        icon.style.marginLeft = element.clientWidth - icon.clientWidth + 'px';
        icon.addEventListener('click', () => {
            wrapper.classList.add('closing');
            this.snackbar.activate('A game has been hidden.');

            setTimeout(() => {
                wrapper.classList.add('closed');
                wrapper.classList.remove('closing');

                this.games[uuid].visible = false;
                this.setStorage();
            }, 1000);
        });
    }

    getStorage(callback?: Function) {
        chrome.storage.sync.get(['games'], (result: any) => {
            this.games = result.games !== undefined ? result.games : {};

            if (callback) callback();
        });
    }

    setStorage(callback?: Function) {
        const self = this;
        chrome.storage.sync.set({ games: self.games }, callback);
    }

    /**
     * Called on startup, initializes important variables.
     */
    onStart(): void {
        this.enabled = true;
        this.createAllWrappers();

        Logger.component('Component', this.name, 'has been enabled');
    }

    /**
     * Called on stop, makes sure to dispose of elements and variables.
     */
    onStop(): void {
        this.enabled = false;
        document
            .querySelectorAll('.stadiaplus_libraryfilter-icon')
            .forEach((e) => e.remove());
        Logger.component('Component', this.name, 'has been disabled');
    }

    /**
     * Called every second, updates the element to match the clock.
     */
    onUpdate() {}
}
