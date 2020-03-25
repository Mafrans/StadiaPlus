import { Component } from '../Component';
import Logger from '../Logger';
import Util from '../Util';
import './styles/LibraryFilter.scss';
import { Snackbar } from '../ui/Snackbar';
import { Select } from '../ui/Select';
import { Database } from '../Database';
import { uuidMap } from '../uuidMap';

const { chrome, Array } = window as any;


export class LibraryFilter extends Component {

    /**
     * Name of the component
     *
     * @type {string}
     * @memberof LibraryFilter
     */
    name: string = 'Library Filter';

    /**
     * List of games and game data imported from the DOM
     *
     * @type {*}
     * @memberof LibraryFilter
     */
    games: any = {};

    /**
     * Snackbar used to display messages when hiding and showing games
     *
     * @type {Snackbar}
     * @memberof LibraryFilter
     */
    snackbar: Snackbar;

    /**
     * Filter bar allowing for controls of the library filter
     *
     * @type {HTMLElement}
     * @memberof LibraryFilter
     */
    filterBar: HTMLElement;

    /**
     * Select box used to order the games
     *
     * @type {Select}
     * @memberof LibraryFilter
     */
    select: Select;

    /**
     * Current filtering order
     *
     * @type {FilterOrder}
     * @memberof LibraryFilter
     */
    order: FilterOrder;

    /**
     * Should all games be shown regardless if theyre hidden or not?
     *
     * @type {boolean}
     * @memberof LibraryFilter
     */
    showAll: boolean;

    direction: OrderDirection;

    gameTiles: NodeList;
    database: Database;

    constructor(snackbar: Snackbar, database: Database) {
        super();

        // Import database from index.js
        this.database = database;
        
        // Import snackbar from index.js
        this.snackbar = snackbar;

        // Create new filter bar element
        this.filterBar = document.createElement('div');
        this.filterBar.classList.add('stadiaplus_libraryfilter-bar');
    }

    /**
     * Creates a wrapper around every game and initializes the elements necessary to show or hide it.
     *
     * @memberof LibraryFilter
     */
    createAllWrappers() {
        this.getStorage(() => {
            let i = 0;
            this.gameTiles.forEach((tile) => {
                i++;
                const element = tile as Element;
                this.createWrapper(element, this.getUUID(element));
                
                if(i === this.gameTiles.length) {
                    this.sortGames();
                }
            });
        });
    }

    /**
     * Get the game UUID from it's jslog attribute.
     *
     * @param {Element} tile
     * @returns
     * @memberof LibraryFilter
     */
    getUUID(tile: Element) {
        return tile
            .getAttribute('jslog')
            .split('; ')[1]
            .substring(3);
    }

    /**
     * Given a tile element, create a wrapper around it and an icon allowing it to be shown or hidden.
     *
     * @param {Element} element the game element
     * @param {string} uuid the game uuid
     * @memberof LibraryFilter
     */
    createWrapper(element: Element, uuid: string) {
        const connection = this.database.getConnection();
        const entry = connection[uuidMap[uuid]];

        // Create the wrapper
        const wrapper = document.createElement('div');
        wrapper.setAttribute('game-uuid', uuid);
        wrapper.setAttribute('game-name', entry[1]);
        wrapper.classList.add('stadiaplus_libraryfilter-wrapper');
        wrapper.id = this.id + '-' + uuid;

        // Create the icon
        const icon = document.createElement('div');
        icon.classList.add('stadiaplus_libraryfilter-icon');
        icon.innerHTML = 'visibility';

        // Wrap the wrapper around the element and add the icon before it
        element.parentNode.insertBefore(wrapper, element);
        wrapper.appendChild(icon);
        wrapper.appendChild(element);

        // Check the storage for visibility, hide the game if both 'visible' and 'showAll' is false
        if (!this.games.hasOwnProperty(uuid)) {
            this.games[uuid] = { visible: true };
        } 
        else if (!this.games[uuid].visible && !this.showAll) {
            wrapper.classList.add('closed');
        }

        // Position the icon in the top right corner rather than the top left using 
        // a margin (using the 'left' css attribute is not possible)
        icon.style.marginLeft = element.clientWidth - icon.clientWidth + 'px';

        // When the icon is clicked on
        icon.addEventListener('click', () => {
            const visible = this.games[uuid].visible;

            // If the game is visible, set it to hidden
            if (visible) {
                this.snackbar.activate('A game has been hidden.');
                this.games[uuid].visible = false;
            } 
            else { // Otherwise set it to shown
                this.snackbar.activate('A game is no longer hidden.');
                this.games[uuid].visible = true;
            }

            // Update the game's visibility
            this.updateGame(wrapper, element, true);
            this.setStorage();
        });
    }

    /**
     * Updates a game's visibility, making sure it's only shown when it's supposed to
     *
     * @param {Element} wrapper The game's wrapper, created by [[createWrapper]]
     * @param {Element} tile The game tile
     * @param {boolean} animate Should the game have an animated closing effect?
     * @memberof LibraryFilter
     */
    updateGame(wrapper: Element, tile: Element, animate: boolean) {
        // Get the game UUID
        const uuid = this.getUUID(tile);

        // Get the game icon
        const icon = wrapper.querySelector(
            '.stadiaplus_libraryfilter-icon',
        ) as HTMLElement;

        // Make sure the icon stays in place and doesn't get reset back to the top left corner
        icon.style.marginLeft = tile.clientWidth - icon.clientWidth + 'px';

        // If the game isn't visible...
        if (!this.games[uuid].visible) {
            // ...but all games should still be shown
            if (this.showAll) {
                // Set the icon to display that it's not visible but shown anyways
                icon.innerHTML = 'visibility_off';

                // Make sure the element isn't hidden
                wrapper.classList.remove('closing', 'closed');
            } 
            else { // Otherwise...
                // ...if the hiding should be animated
                if (animate) {
                    // Fade the game tile out
                    wrapper.classList.add('closing');

                    // After 1 second, hide it
                    setTimeout(() => {
                        wrapper.classList.add('closed');
                    }, 1000);
                } 
                else { // Otherwise
                    // Hide the element normally
                    wrapper.classList.add('closed');
                }
            }
        } else { // If the game is visible
            // Make sure the icon shows that it is visible
            icon.innerHTML = 'visibility';
        }
    }

    /**
     * Update all games, shorthand for looping through tiles and updating them individually
     *
     * @memberof LibraryFilter
     */
    updateAllGames() {
        this.sortGames();

        this.gameTiles.forEach((tile) => {
            this.updateGame(tile.parentElement, tile as Element, false);
        });
    }

    /**
     * Read the stored data from the synchronized chrome storage (stored in your user data)
     *
     * @param {Function} [callback] // Callback that is run after the data has been read
     * @memberof LibraryFilter
     */
    getStorage(callback?: Function) {
        if(!this.enabled) {
            this.games = {};
            if (callback) callback();
        }

        chrome.storage.sync.get(['games', 'sort-order', 'sort-direction'], (result: any) => {
            this.games = result.games !== undefined ? result.games : {};
            this.order = result['sort-order'] !== undefined ? result['sort-order'] : FilterOrder.RECENT;
            this.direction = result['sort-direction'] !== undefined ? result['sort-direction'] : OrderDirection.ASCENDING;

            if (callback) callback();
        });
    }

    /**
     * Write to the synchronized chrome storage (stored in your user data)
     *
     * @param {Function} [callback] // Callback that is run after the data has been written
     * @returns
     * @memberof LibraryFilter
     */
    setStorage(callback?: Function) {
        if(!this.enabled) {
            if (callback) callback();
            return;
        }

        chrome.storage.sync.set({ games: this.games, 'sort-order': this.order, 'sort-direction': this.direction }, callback);
    }

    /**
     * Runs when the component has loaded
     *
     * @memberof LibraryFilter
     */
    onStart(): void {
        this.enabled = true;
        this.filterBar.id = this.id + '-filterbar';
        this.filterBar.innerHTML = `
            <span class="material-icons-extended">
                filter_list
            </span>
            <select name="order">
                <option value="${FilterOrder.RECENT}">Recently Played</option>
                <option value="${FilterOrder.ALPHABETICAL}">Alphabetical</option>
                <option value="${FilterOrder.RANDOM}">Random</option>
            </select>
            <span id='${this.filterBar.id + '-direction'}' class="material-icons-extended stadiaplus_filterbar-direction"></span>
            <div id='${this.filterBar.id + '-checkbox'}' class="pretty p-bigger p-default p-curve stadiaplus_filterbar-checkbox">
                <input type="checkbox" />
                <div class="state">
                    <label>Show hidden</label>
                </div>
            </div>
        `;
        
        // Style the custom select box in the filter bar
        this.select = new Select(
            this.filterBar.querySelector('select'),
            FilterOrder.RECENT,
        );

        // Create an observer observing the filterbar container, making sure to reload the bar whenever it gets destroyed.
        const config = { attributes: true, childList: true, subtree: true };
        const observer = new MutationObserver((event) => {
            const childChanges = event.filter((e) => e.type === 'childList');

            // Identify the correct changes in the DOM
            if (childChanges.length === 4) {

                // If the filter bar doesn't already exist...
                if (!this.filterBarExists()) {
                    // Create it
                    const container = document.querySelector('.CVVXfc.YYy3Zb');
                    this.gameTiles = document.querySelectorAll('.GqLi4d');
                    container.appendChild(this.filterBar);

                    this.createAllWrappers();

                    if(!this.eventsExist) {
                        this.addFilterBarEvents();
                    }
                }
            }
        });
        observer.observe(document.querySelector('.iadg4b'), config);

        Logger.component('Component', this.name, 'has been enabled');
    }

    private eventsExist: boolean;
    /**
     * Adds a variety of events to the filter bar
     *
     * @memberof LibraryFilter
     */
    addFilterBarEvents() {
        // When the order is changed, set it in the storage
        this.select.element.addEventListener('change', () => {
            this.order = parseInt(this.select.get()[0]) as FilterOrder;
            this.sortGames();
            this.setStorage();
        });

        const checkbox = document.getElementById(this.filterBar.id + '-checkbox');
        // When the show all checkbox is clicked, toggle the showAll variable and update the games
        checkbox.addEventListener('click', () => {
            this.showAll = (checkbox as any).checked;
            this.updateAllGames();
        });

        const dir = document.getElementById(this.filterBar.id + '-direction');
        // Toggle the sort direction
        dir.addEventListener('mouseup', () => {
            if(this.direction === OrderDirection.ASCENDING) {
                this.direction = OrderDirection.DESCENDING;
                dir.classList.add('descending');
                dir.classList.remove('ascending');
            }
            else {
                this.direction = OrderDirection.ASCENDING;
                dir.classList.add('ascending');
                dir.classList.remove('descending');
            }
            this.sortGames();
            this.setStorage();
            event.stopPropagation();
        });

        this.eventsExist = true;
    }

    /**
     * Runs when the component is stopped, destroys necessary parts
     *
     * @memberof LibraryFilter
     */
    onStop(): void {
        this.enabled = false;
        document
            .querySelectorAll('.stadiaplus_libraryfilter-icon')
            .forEach((e) => e.remove());
        Logger.component('Component', this.name, 'has been disabled');
    }

    filterBarExists(): boolean {
        return document.getElementById(this.id + '-filterbar') !== null;
    }

    sortGames() {
        let arr = (Array.from(this.gameTiles) as Element[]).map(e => e.parentElement); // Get all wrappers as an array
        arr = arr.sort(FilterOrder.getSorter(this.order));

        if(this.direction === OrderDirection.ASCENDING) {
            arr = arr.reverse();
        }

        arr.forEach(el => {
            el.parentElement.prepend(el);
        })
    }

    onUpdate() {}
}

export class FilterOrder {
    static RECENT = 0;
    static ALPHABETICAL = 1;
    static ALPHABETICAL_REVERSE = 2;
    static RANDOM = 3;

    static getSorter(order: FilterOrder) {
        switch(order) {
            case this.RECENT: 
                return this.sortRecent;

            case this.ALPHABETICAL: 
                return this.sortAlphabetical;

            case this.RANDOM: 
                return this.sortRandom;
        }
    }

    private static sortRecent(a:any, b:any) {
        return 1;
    }

    private static sortAlphabetical(a:any, b:any) {
        return a.getAttribute('game-name').localeCompare(b.getAttribute('game-name'));
    }

    private static sortRandom(a:any, b:any) {
        return Math.round(Math.random() * 2) - 1;
    }
}

export enum OrderDirection {
    ASCENDING,
    DESCENDING
}