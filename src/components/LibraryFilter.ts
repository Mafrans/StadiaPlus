import { Component } from '../Component';
import Logger from '../Logger';
import Util from '../Util';
import './styles/LibraryFilter.scss';
import { Snackbar } from '../ui/Snackbar';
import { Select } from '../ui/Select';
import { WebDatabase } from '../WebDatabase';
import { Checkbox, CheckboxShape } from '../ui/Checkbox';
import { Language } from '../Language';
import { SyncStorage, LocalStorage } from '../Storage';
import { Shortcut } from '../Shortcut';
import { Modal } from '../ui/Modal';
import '../ui/styles/Button.scss';
import { StadiaPlusDBHook } from './StadiaPlusDBHook';
import { StadiaPlusDB } from '../StadiaPlusDB';
import { StadiaGameDB } from '../StadiaGameDB';
import { $el } from '../util/ElGen';

const { chrome, Array } = window as any;

/**
 * A filtering system allowing hiding and showing specific games in your library as well as ordering them by name.
 *
 * @export the LibraryFilter type
 * @class LibraryFilter
 * @extends {Component}
 */
export class LibraryFilter extends Component {
    /**
     * The component tag, used in language files.
     */
    tag: string = 'library-filter';

    /**
     * List of games and game data imported from the DOM
     */
    games: LibraryGame[] = [];

    /**
     * Snackbar used to display messages when hiding and showing games
     */
    snackbar: Snackbar;

    /**
     * Filter bar allowing for controls of the library filter
     */
    filterBar: HTMLElement;

    /**
     * Select box used to order the games
     */
    select: Select;

    /**
     * Current filtering order
     */
    order: FilterOrder;

    /**
     * Should all games be shown regardless if theyre hidden or not?
     */
    showAll: boolean;

    /**
     * Checkbox showing hidden games.
     */
    checkbox: HTMLElement;

    /**
     * Direction of which games will be ordered.
     */
    direction: OrderDirection;

    /**
     * A list of all games in your library.
     */
    gameTiles: NodeList;

    /**
     * UI Modal
     */
    modal: Modal;

    /**
     * Web Scraper
     */
    db: StadiaPlusDBHook;

    searchColumn: HTMLElement;
    gameContainer: HTMLElement;

    constructor(snackbar: Snackbar, modal: Modal, webScraper: StadiaPlusDBHook) {
        super();

        // Import snackbar from index.js
        this.snackbar = snackbar;

        this.modal = modal;

        this.db = webScraper;
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
     * Runs when the component has loaded
     *
     * @memberof LibraryFilter
     */
    async onStart() {
        this.active = true;
        this.updateRenderer();
        Logger.component(Language.get('component.enabled', { name: this.name }));

        const gameTiles = document.querySelectorAll('.GqLi4d');
        this.games = await new Promise((resolve) => {
            SyncStorage.LIBRARY_GAMES.get((e) => resolve(e[SyncStorage.LIBRARY_GAMES.tag]));
        });

        if (!(this.games instanceof Array)) {
            this.games = [];
        }

        (document.querySelector('.fJrLJb') as HTMLElement).style['display'] = 'none';

        this.createContainer();

        this.updateGames();
        gameTiles.forEach((gameTile) => {
            const uuid = this.getUUID(gameTile);
            const game: LibraryGame = new LibraryGame(uuid);
            game.create().then(() => {
                if (this.games.find((e) => e.uuid === uuid) == null) {
                    this.games.push(game);

                    this.updateGames();
                }
            });
        });
    }

    updateGames() {
        this.games.forEach((game) => {
            if (document.querySelector('.stadiaplus_libraryfilter-game[data-uuid="' + game.uuid + '"]') == null) {
                const tile = game.createTile();

                let playerURL: any = location.href.split('/');
                playerURL[playerURL.length-1] = 'player/' + game.uuid;
                playerURL = playerURL.join('/');

                tile.addEventListener('click', () => {
                    location.href = playerURL;
                })

                this.gameContainer.appendChild(tile);
                
                const listGame = $el('div')
                    .class({'stadiaplus_libraryfilter-listgame': true})
                    .child($el('hr'))
                    .child(
                        $el('h6')
                            .text(game.name)
                            .child(
                                $el('i')
                                    .class({'material-icons-extended': true})
                                    .text('keyboard_arrow_right')
                            )
                    ).element;

                listGame.addEventListener('click', () => {
                    location.href = playerURL;
                })

                this.searchColumn.appendChild(listGame);
            }
        });
    }

    createContainer() {
        const root = this.renderer.querySelector('.z1P2me');

        const search = $el('input').element;
        search.addEventListener('input', () => {
            const val = (search as any).value;
            console.log(val);
            
            document.querySelectorAll('.stadiaplus_libraryfilter-game')
                .forEach((element: HTMLElement) => {
                    const name = StadiaGameDB.get(element.getAttribute('data-uuid')).name;

                    if(!name.toLowerCase().includes(val.toLowerCase())) {
                        element.style['display'] = 'none';
                    }
                    else {
                        element.style['display'] = null;
                    }
                })
            
            document.querySelectorAll('.stadiaplus_libraryfilter-listgame')
                .forEach((element: HTMLElement) => {
                    const name = element.querySelector('h6').textContent;

                    if(!name.toLowerCase().includes(val.toLowerCase())) {
                        element.style['display'] = 'none';
                    }
                    else {
                        element.style['display'] = null;
                    }
                })
        })

        this.searchColumn = $el('div')
            .class({ 'stadiaplus_libraryfilter-searchcolumn': true })
            .child(
                $el('div')
                    .class({ 'stadiaplus_libraryfilter-searchcolumn-bar': true })
                    .child(
                        $el('i')
                            .class({ 'material-icons-extended': true })
                            .text('search')
                    )
                    .child(search)
            ).element;

        this.gameContainer = $el('div').class({ 'stadiaplus_libraryfilter-gamecontainer': true }).element;

        $el('h2')
            .text('Your Games')
            .css({'margin-top': '8rem'})
            .appendTo(root);
            
        $el('div')
            .class({ stadiaplus_libraryfilter: true })
            .child(this.searchColumn)
            .child(this.gameContainer)
            .appendTo(root);
    }

    /**
     * Runs when the component is stopped, destroys necessary parts
     *
     * @memberof LibraryFilter
     */
    onStop(): void {
        this.active = false;
        Logger.component(Language.get('component.disabled', { name: this.name }));
    }

    /**
     * Runs every second, creates and updates elements.
     *
     * @memberof LibraryFilter
     */
    onUpdate(): void {
        if (Util.isInHome()) {
            if (!this.exists()) {
                this.updateRenderer();
            }
        }
    }
}

class LibraryGame {
    public name: string;
    public img: string;
    public uuid: string;
    public visible: boolean;

    constructor(uuid: string) {
        this.uuid = uuid;
        SyncStorage.LIBRARY_GAMES.get((result) => {
            let librarygames = result[SyncStorage.LIBRARY_GAMES.tag];
            if (librarygames == null) librarygames = [];

            if ((librarygames as LibraryGame[]).find((a) => a.uuid === uuid)) {
                this.name = result.name;
                this.visible = result.visible;
            }
        });
    }

    async create() {
        this.visible = true;
        this.name = this.uuid;
        this.img = null;

        const game = StadiaGameDB.get(this.uuid);
        if (game !== undefined) {
            this.name = game.name;
            this.img = game.img;
        }
    }

    createTile(): HTMLElement {
        return $el('div')
            .class({ 'stadiaplus_libraryfilter-game': true })
            .attr({ 'data-uuid': this.uuid })
            .child(
                $el('img')
                    .class({ 'play-button': true })
                    .attr({ src: chrome.runtime.getURL('images/PlayButtonBackground.png') })
            )
            .child(
                $el('img')
                    .class({ 'play-icon': true })
                    .attr({ src: chrome.runtime.getURL('images/PlayButton.png') })
            )
            .child(
                $el('div')
                    .class({ content: true })
                    .child($el('h6').text(this.name))
            )
            .css({
                display: this.visible ? null : 'none',
                'background-image': this.img !== null ? `url(${this.img})` : null,
            }).element;
    }
}

/**
 * Different types of filtering, represented as numbers
 *
 * @export the FilterOrder type
 * @class FilterOrder
 */
export class FilterOrder {
    /**
     * Default Stadia sorting, recent/new games.
     *
     * @static
     * @memberof FilterOrder
     */
    static RECENT = 0;

    /**
     * Alphabetical order.
     *
     * @static
     * @memberof FilterOrder
     */
    static ALPHABETICAL = 1;

    /**
     * Random order.
     *
     * @static
     * @memberof FilterOrder
     */
    static RANDOM = 2;

    /**
     * Get the sorting method of the inputed order.
     *
     * @static
     * @returns a function sorting games by the inputed order.
     * @param {FilterOrder} order
     * @memberof FilterOrder
     */
    static getSorter(order: FilterOrder): Function {
        switch (order) {
            case this.RECENT:
                return this.sortRecent;

            case this.ALPHABETICAL:
                return this.sortAlphabetical;

            case this.RANDOM:
                return this.sortRandom;
        }
    }

    /**
     * Sort by recent games.
     *
     * @private
     * @static
     * @param {*} a
     * @param {*} b
     * @returns number representing which parameter is where.
     * @memberof FilterOrder
     */
    private static sortRecent(a: any, b: any): number {
        return 1;
    }

    /**
     * Sort alphabetically.
     *
     * @private
     * @static
     * @param {*} a
     * @param {*} b
     * @returns number representing which parameter is where.
     * @memberof FilterOrder
     */
    private static sortAlphabetical(a: any, b: any): number {
        const nameA = a.getAttribute('game-name');
        const nameB = b.getAttribute('game-name');

        if (nameA === null || nameB === null) {
            return null;
        }

        return nameA.localeCompare(nameB);
    }

    private static sortRandom(a: any, b: any) {
        return Math.round(Math.random() * 2) - 1;
    }
}

/**
 * Enum containing different order directions
 *
 * @export the OrderDirection type.
 * @enum {number}
 */
export enum OrderDirection {
    ASCENDING,
    DESCENDING,
}
