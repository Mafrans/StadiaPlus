import { Component } from '../Component';
import Logger from '../Logger';
import Util from '../Util';
import './styles/LibraryFilter.scss';
import { Snackbar } from '../ui/Snackbar';
import { Select } from '../ui/Select';

const { chrome } = window as any;


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

    gameTiles: NodeList;

    constructor(snackbar: Snackbar) {
        super();

        // Import snackbar from index.js
        this.snackbar = snackbar;

        // Create new filter bar element
        this.filterBar = document.createElement('div');
        this.filterBar.classList.add('stadiaplus_libraryfilter-bar');
        this.filterBar.innerHTML = `
            <span class="material-icons-extended">
                filter_list
            </span>
            <select name="order">
                <option value="${FilterOrder.RECENT}">Recently Played</option>
                <option value="${FilterOrder.ALPHABETICAL}">A-Z</option>
                <option value="${FilterOrder.RANDOM}">Random</option>
            </select>
            <div class="pretty p-bigger p-default p-curve stadiaplus_filterbar-checkbox">
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
    }

    /**
     * Creates a wrapper around every game and initializes the elements necessary to show or hide it.
     *
     * @memberof LibraryFilter
     */
    createAllWrappers() {
        this.getStorage(() => {
            this.gameTiles.forEach((tile) => {
                this.createWrapper(tile as Element, this.getUUID(tile));
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

        // Create the wrapper
        const wrapper = document.createElement('div');
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
        this.gameTiles.forEach((tile) =>
            this.updateGame(tile.parentElement, tile as Element, false),
        );
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

        chrome.storage.sync.get(['games'], (result: any) => {
            this.games = result.games !== undefined ? result.games : {};

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

        chrome.storage.sync.set({ games: this.games }, callback);
    }

    /**
     * Runs when the component has loaded
     *
     * @memberof LibraryFilter
     */
    onStart(): void {
        this.enabled = true;
        this.filterBar.id = this.id + '-filterbar';
        this.gameTiles = document.querySelectorAll('.GqLi4d');

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
                    container.appendChild(this.filterBar);

                    this.createAllWrappers();
                    this.addFilterBarEvents();
                }
            }
        });
        observer.observe(document.querySelector('.iadg4b'), config);

        Logger.component('Component', this.name, 'has been enabled');
    }

    /**
     * Adds a variety of events to the filter bar
     *
     * @memberof LibraryFilter
     */
    addFilterBarEvents() {
        // When the order is changed, set it in the storage
        this.select.element.addEventListener('change', () => {
            this.order = parseInt(this.select.get()[0]) as FilterOrder;
            this.setStorage();
        });

        const checkbox = document.querySelector(
            '.stadiaplus_filterbar-checkbox>input',
        );

        // When the show all checkbox is clicked, toggle the showAll variable and update the games
        checkbox.addEventListener('click', () => {
            this.showAll = (checkbox as any).checked;
            this.updateAllGames();
        });
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

    sortGames(games: NodeList) {

    }

    onUpdate() {}
}

export enum FilterOrder {
    RECENT,
    ALPHABETICAL,
    RANDOM,
}
