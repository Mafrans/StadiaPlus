import { Component } from '../Component';
import Logger from '../Logger';
import Util from '../Util';
import './styles/StoreFilter.scss';
import { Database } from '../Database';

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
    name: string = "Store Filter";

    /**
     * The clock element.
     */
    element: HTMLElement;
    gameTemplate: HTMLElement;
    database: Database;
    uuidMap: Database;
    games: HTMLElement[] = [];

    constructor(database: Database, uuidMap: Database) {
        super();
        this.database = database;
        this.uuidMap = uuidMap;
    }

    /**
     * Creates a simple <span>, adds the right classes, and stores it in [@link #element]
     */
    createElement() {
        this.element = document.createElement('div');
        this.element.classList.add('stadiaplus_storefilter');
        this.element.id = this.id;
        this.element.innerHTML = `
            <div class='bar'>
                <input type='text' id='${this.id}-search'>
            </div>
            <div class='games' id='${this.id}-games'>

            </div>
        `;

        const connection = this.database.getConnection()['data'];
        const map = this.uuidMap.getConnection()['uuidMap'];
        for(const key in map) {
            console.log(key);
            const entry = connection[map[key]];

            const element: HTMLElement = document.createElement('div');
            element.classList.add('stadiaplus_storefilter-game');
            element.innerHTML = `
                <img src='https://loremflickr.com/640/360'>
                <div class='detail'>
                    <h6 class='name'>Lorem Ipsum</h6>
                </div>
            `
            
            element.setAttribute('data-uuid', key);
            element.setAttribute('data-name', entry[1]);
            element.setAttribute('data-url', entry[0].match(/(https:\/\/stadia.google.com\/store\/details\/[0-9a-z/]+)/g));
            element.setAttribute('data-img', 'https://stadiagamedb.com/' + entry[0].match(/(images\/posters\/[a-z0-9_.-]+.png)/g));

            this.games.push(element);
        }
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
        this.element.remove();
        Logger.component('Component', this.name, 'has been disabled');
    }

    /**
     * Called every second, updates the element to match the clock.
     */
    onUpdate() {
        // Only update the clock when it's visible
        if(Util.isInStore()) {
            if(!this.exists()) {
                const container = document.querySelector('.nWmtLd');
                container.prepend(this.element);

                const gameContainer = document.getElementById(this.id + '-games');
                for(const game of this.games) {
                    gameContainer.appendChild(game);

                    const image = game.querySelector('img');
                    image.src = game.getAttribute('data-img');
        
                    const name = game.querySelector('.detail>.name');
                    name.innerHTML = game.getAttribute('data-name');
                }
            }
        }
    }
}
