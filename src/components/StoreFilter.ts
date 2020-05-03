import { Component } from '../Component';
import Logger from '../Logger';
import Util from '../Util';
import './styles/StoreFilter.scss';
import { WebDatabase } from '../WebDatabase';
import { Language } from '../Language';

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
    tag: string = 'store-filter';

    /**
     * The search bar element.
     */
    element: HTMLElement;

    /**
     * A template element for individual games in the search box.
     */
    gameTemplate: HTMLElement;

    /**
     * The StadiaGameDB database.
     */
    database: WebDatabase;

    /**
     * The StadiaGameDB UUID Map.
     */
    uuidMap: WebDatabase;

    /**
     * An array of all game elements.
     */
    games: HTMLElement[] = [];

    /**
     * The search input.
     */
    searchField: HTMLElement;

    constructor(database: WebDatabase, uuidMap: WebDatabase) {
        super();
        this.database = database;
        this.uuidMap = uuidMap;
    }

    /**
     * Creates the search bar and necessary elements/variables.
     *
     * @memberof StoreFilter
     */
    createElement(): void {
        const connection = this.database.getConnection()['data'];
        const map = this.uuidMap.getConnection()['uuidMap'];

        this.element = document.createElement('div');
        this.element.classList.add('stadiaplus_storefilter');
        this.element.id = this.id;
        this.element.innerHTML = `
            <div class='bar'>
                <input type='text' placeholder="${connection[Math.floor(Math.random() * connection.length)][1]}..." id='${this.id}-search'>
            </div>
            <div class='games' id='${this.id}-games'>

            </div>
        `;

        Object.keys(map).forEach((key: string) => {
            const entry = connection[map[key]];

            const element: HTMLElement = document.createElement('a');
            element.classList.add('stadiaplus_storefilter-game');
            element.innerHTML = `
                <img src='https://loremflickr.com/640/360'>
                <div class='detail'>
                    <h5 class='name'>Lorem Ipsum</h5>
                    <span class='stadiaplus_muted tags'></span>
                </div>
            `
            
            element.setAttribute('data-uuid', key);
            element.setAttribute('data-name', entry[1]);
            element.setAttribute('data-tags', entry[2]);

            let url = "https://stadia.google.com" as any;
            const locArr = location.href.split('/');
            if(locArr.length > 5) {
                url = locArr.slice(0, 5).join('/') + '/';
                url = url.substring(0, url.length + (url.endsWith('/') ? -1 : 0));
            }
            const storeId = entry[0].match(/https:\/\/stadia.google.com\/store\/details\/([0-9a-z/]+)/)[1];
            element.setAttribute('href', url + '/store/details/' + storeId);
            element.setAttribute('data-img', 'https://stadiagamedb.com/' + entry[0].match(/(images\/posters\/[a-z0-9_.-]+.png)/g));

            this.games.push(element);
        });
    }

    /**
     * Adds the input events to the search bar.
     *
     * @memberof StoreFilter
     */
    addEvents(): void {
        this.searchField.addEventListener('input', () => {
            this.search((this.searchField as any).value);
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
            const name = game.getAttribute('data-name').toLowerCase();
            game.classList.toggle('shown', query.length > 0 && name.indexOf(query.toLowerCase()) !== -1);
        })
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
        this.element.remove();
        Logger.component(Language.get('component.disabled', { name: this.name }));
    }

    /**
     * Called every second, makes sure the search bar only exists when it's supposed to and works properly even if accidentally destroyed.
     * 
     * @memberof Clock
     */
    onUpdate() {
        if(Util.isInStore()) {
            if(!this.exists()) {
                this.updateRenderer();
                const container = this.renderer.querySelector('.nWmtLd');

                if(container === null) return;

                container.prepend(this.element);

                const gameContainer = document.getElementById(this.id + '-games');
                this.games.forEach((game) => {
                    gameContainer.appendChild(game);

                    const image = game.querySelector('img');
                    image.src = game.getAttribute('data-img');
        
                    const name = game.querySelector('.detail>.name');
                    name.innerHTML = game.getAttribute('data-name');
                    
                    const tags = game.querySelector('.detail>.tags');
                    tags.innerHTML = game.getAttribute('data-tags');
                });

                this.searchField = this.renderer.querySelector('#' + this.id + '-search');
            
                this.addEvents();
            }
        }
    }
}
