/* eslint-disable no-restricted-globals */
import { Component } from '../Component';
import Logger from '../Logger';
import Util from '../util/Util';
import './styles/StoreFilter.scss';
import { Language } from '../Language';
import { StadiaGameDB } from '../StadiaGameDB';

/**
 * A search bar displayed on the store page of Stadia.
 *
 * @export the StoreFilter type.
 * @class StoreFilter
 * @extends {Component}
 */
export class StoreFilter extends Component {
    /**
     * The component tag, used in language files.
     */
    tag = 'store-filter';

    /**
     * The search bar element.
     */
    element: HTMLElement | null = null;

    /**
     * A template element for individual games in the search box.
     */
    gameTemplate: HTMLElement | null = null;

    /**
     * An array of all game elements.
     */
    games: HTMLElement[] = [];

    /**
     * The search input.
     */
    searchField: HTMLInputElement | null = null;

    /**
     * Creates the search bar and necessary elements/variables.
     *
     * @memberof StoreFilter
     */
    createElement(): void {
        this.element = document.createElement('div');
        this.element.classList.add('stadiaplus_storefilter');
        this.element.id = this.id;
        this.element.innerHTML = `
            <div class='bar'>
                <input type='text' placeholder="${StadiaGameDB.random().name}..." id='${this.id}-search'>
            </div>
            <div class='games' id='${this.id}-games'>

            </div>
        `;

        Object.keys(StadiaGameDB.getGames()).forEach((uuid: string) => {
            const entry = StadiaGameDB.get(uuid);

            const element: HTMLElement = document.createElement('a');
            element.classList.add('stadiaplus_storefilter-game');
            element.innerHTML = `
                <img src='https://loremflickr.com/640/360'>
                <div class='detail'>
                    <h5 class='name'>Lorem Ipsum</h5>
                    <span class='stadiaplus_muted tags'></span>
                </div>
            `;

            element.setAttribute('data-uuid', uuid);
            element.setAttribute('data-name', entry.name);
            element.setAttribute('data-tags', entry.tags.map((tag) => tag?.name).join(', '));

            let url = 'https://stadia.google.com';
            const locArr = location.href.split('/');
            if (locArr.length > 5) {
                url = `${locArr.slice(0, 5).join('/')}/`;
                url = url.substring(0, url.length + (url.endsWith('/') ? -1 : 0));
            }
            const { storeId } = entry;
            element.setAttribute('href', `${url}/store/details/${storeId !== undefined ? storeId : ''}`);
            element.setAttribute('data-img', entry.img);

            this.games.push(element);
        });
    }

    /**
     * Adds the input events to the search bar.
     *
     * @memberof StoreFilter
     */
    addEvents(): void {
        this.searchField?.addEventListener('input', () => {
            if (this.searchField !== null) {
                this.search(this.searchField.value);
            }
        });
    }

    /**
     * Searches the game list for a specific string and shows whichever games fit.
     *
     * @param {string} query the string to search for.
     * @memberof StoreFilter
     */
    search(query: string): void {
        this.games.forEach((game) => {
            const name = game.getAttribute('data-name');
            if (name !== null) {
                game.classList.toggle('shown', query.length > 0 && name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
            }
        });
    }

    /**
     * Called on startup, initializes important variables.
     *
     * @memberof Clock
     */
    onStart(): void {
        this.active = true;
        this.createElement();

        Logger.component(Language.get('component.enabled', { name: this.name }));
    }

    /**
     * Called on stop, makes sure to dispose of elements and variables.
     *
     * @memberof Clock
     */
    onStop(): void {
        this.active = false;
        this.element?.remove();
        Logger.component(Language.get('component.disabled', { name: this.name }));
    }

    /**
     * Called every second, makes sure the search bar only exists when
     * it's supposed to and works properly even if accidentally destroyed.
     *
     * @memberof Clock
     */
    onUpdate(): void {
        if (Util.isInStore()) {
            if (!this.exists()) {
                this.updateRenderer();

                if (this.renderer === undefined) {
                    Logger.error('Renderer is undefined');
                    return;
                }

                const container = this.renderer.querySelector('.yUnkH');

                if (container === null || this.element === null) return;

                container.prepend(this.element);

                const gameContainer = document.getElementById(`${this.id}-games`);
                this.games.forEach((game) => {
                    gameContainer?.appendChild(game);

                    const imageElement = game.querySelector('img');
                    const imgData = game.getAttribute('data-img');
                    if (imageElement !== null && imgData !== null) {
                        imageElement.src = imgData;
                    }

                    const nameElement = game.querySelector('.detail>.name');
                    const nameData = game.getAttribute('data-name');
                    if (nameElement !== null && nameData !== null) {
                        nameElement.textContent = nameData;
                    }

                    const tagsElement = game.querySelector('.detail>.tags');
                    const tagsData = game.getAttribute('data-tags');
                    if (tagsElement !== null && tagsData !== null) {
                        tagsElement.textContent = tagsData;
                    }
                });

                this.searchField = this.renderer.querySelector(`#${this.id}-search`);

                this.addEvents();
            }
        }
    }
}
