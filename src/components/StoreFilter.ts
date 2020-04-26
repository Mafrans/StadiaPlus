import { Component } from '../Component';
import Logger from '../Logger';
import Util from '../Util';
import './styles/StoreFilter.scss';
import { Database } from '../Database';
import { Language } from '../Language';

/**
 * A simple clock displayed in the Stadia Menu.
 *
 * @export the Clock type.
 * @class Clock
 * @extends {Component}
 */
export class StoreFilter extends Component {

    /**
     * The name of the Component.
     */
    tag: string = 'store-filter';

    /**
     * The clock element.
     */
    element: HTMLElement;
    gameTemplate: HTMLElement;
    database: Database;
    uuidMap: Database;
    games: HTMLElement[] = [];
    searchField: HTMLElement;

    constructor(database: Database, uuidMap: Database) {
        super();
        this.database = database;
        this.uuidMap = uuidMap;
    }

    /**
     * Creates a simple <span>, adds the right classes, and stores it in [@link #element]
     */
    createElement() {
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

    addEvents() {
        this.searchField.addEventListener('input', () => {
            this.search((this.searchField as any).value);
        });
    }

    search(query: string) {
        this.games.forEach((game) => {
            const name = game.getAttribute('data-name').toLowerCase();
            game.classList.toggle('shown', query.length > 0 && name.indexOf(query.toLowerCase()) !== -1);
        })
    }

    /**
     * Called on startup, initializes important variables.
     */
    onStart(): void {
        this.active = true;
        this.createElement();

        Logger.component(Language.get('component.enabled', { name: this.name }));
    }

    /**
     * Called on stop, makes sure to dispose of elements and variables.
     */
    onStop(): void {
        this.active = false;
        this.element.remove();
        Logger.component(Language.get('component.disabled', { name: this.name }));
    }

    /**
     * Called every second, updates the element to match the clock.
     */
    onUpdate() {
        // Only update the clock when it's visible
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
