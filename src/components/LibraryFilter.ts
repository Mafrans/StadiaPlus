import { Component } from '../Component';
import Logger from '../Logger';
import Util from '../util/Util';
import './styles/LibraryFilter.scss';
import { Select, SelectStyle } from '../ui/Select';
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
import { drop } from '../../docs/assets/js/main';
import { NavButton, NavPosition } from '../ui/NavButton';

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
    sorted: LibraryGame[] = [];

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
     * Web Scraper
     */
    db: StadiaPlusDBHook;

    searchColumn: HTMLElement;
    gameContainer: HTMLElement;

    tagSelect: Select;
    onlineTypeSelect: Select;

    constructor(webScraper: StadiaPlusDBHook) {
        super();

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

    getImage(tile: Element) {
        const src = (tile.querySelector('.YXkCBb') as HTMLElement).style.backgroundImage;
        return src.substring(5, src.length - 3);
    }

    /**
     * Runs when the component has loaded
     *
     * @memberof LibraryFilter
     */
    async onStart() {
        this.active = true;

        Logger.component(Language.get('component.enabled', { name: this.name }));
    }

    async reloadLibrary() {
        Logger.info('Reloading Library');

        if ((await SyncStorage.LIBRARY_SORT_ORDER.get()) == null)
            await SyncStorage.LIBRARY_SORT_ORDER.set(FilterOrder.RECENT.id);

        const gameTiles = this.renderer.querySelectorAll('.GqLi4d');
        this.games = await SyncStorage.LIBRARY_GAMES.get();

        if (!(this.games instanceof Array)) {
            this.games = [];
        }

        (this.renderer.querySelector('.fJrLJb') as HTMLElement).style['display'] = 'none';
        if (document.getElementById(this.id) != null) {
            document.getElementById(this.id).remove(); // Remove any existing libraries, just to be sure.
        }

        await this.createContainer();

        for (const gameTile of gameTiles) {
            const uuid = this.getUUID(gameTile);
            const game: LibraryGame = await new LibraryGame(uuid);
            await game.create(this.getImage(gameTile));

            if (this.games.find((e) => e.uuid === uuid) == null) {
                this.games.push(game);
            }
        }

        Util.desandbox(
            `WebScraperRunnable.setAutoUpdate(${
                StadiaPlusDB.isAuthenticated() && localStorage.getItem('autoUpdate') === 'true' ? 'true' : 'false'
            })`
        );

        this.resortGames();
    }

    updateGames(sorted: LibraryGame[]) {
        Util.desandbox(`WebScraperRunnable.games = ${JSON.stringify(sorted.map((e) => e.uuid))}`);
        for (const game of sorted) {
            if (
                this.gameContainer.querySelector('.stadiaplus_libraryfilter-game[data-uuid="' + game.uuid + '"]') ==
                null
            ) {
                const tile = game.createTile();

                let playerURL: any = location.href.split('/');
                playerURL[playerURL.length - 1] = 'player/' + game.uuid;
                playerURL = playerURL.join('/');

                tile.addEventListener('click', () => {
                    location.href = playerURL;
                });

                this.gameContainer.appendChild(tile);
                tile.style.backgroundSize = `auto ${tile.offsetHeight + 16}px`; // Add arbitrary magic number to make sure there aren't visible borders

                const listGame = $el('div')
                    .class({ 'stadiaplus_libraryfilter-listgame': true })
                    .attr({ 'data-uuid': game.uuid })
                    .child($el('hr'))
                    .child($el('h6').html(`<i class="material-icons-extended">play_circle_outline</i> ${game.name}`))
                    .element;

                listGame.addEventListener('click', () => {
                    location.href = playerURL;
                });

                this.searchColumn.appendChild(listGame);
            }
        }
    }

    async resortGames() {
        for (const game of this.renderer.querySelectorAll(
            '.stadiaplus_libraryfilter-game, .stadiaplus_libraryfilter-listgame'
        )) {
            game.setAttribute('old', '');
            game.setAttribute('data-uuid', '');
        }

        (this.renderer.querySelector('.stadiaplus_libraryfilter-searchcolumn-bar>input') as any).value = '';

        this.renderer.querySelector('.stadiaplus_libraryfilter-sortorderindicator').textContent = FilterOrder.from(
            await SyncStorage.LIBRARY_SORT_ORDER.get()
        ).name;
        await this.updateGames(await this.getSortedGames());
        this.renderer
            .querySelectorAll('.stadiaplus_libraryfilter-game[old], .stadiaplus_libraryfilter-listgame[old]')
            .forEach((e) => e.remove());

        this.updateVisibility();
    }

    async updateVisibility() {
        const tags = (this.tagSelect.get() as string[]).map((id) => StadiaGameDB.Tag.fromId(id));
        const onlineTypes = (this.onlineTypeSelect.get() as string[]).map((id) => StadiaGameDB.OnlineType.fromId(id));

        if (tags.length === 0 && onlineTypes.length === 0) {
            document.querySelector('.stadiaplus_libraryfilter-visibilityindicator').textContent = 'All';
        } else {
            document.querySelector('.stadiaplus_libraryfilter-visibilityindicator').textContent = 'Custom';
        }

        for (const game of this.games) {
            const sgdb = StadiaGameDB.get(game.uuid);
            let visible = true;

            for (const tag of tags) {
                if (sgdb.tags.find((e) => e.id == tag.id) == null) {
                    visible = false;
                }
            }

            for (const type of onlineTypes) {
                if (sgdb.onlineTypes.find((e) => e.id == type.id) == null) {
                    visible = false;
                }
            }

            const tile = document.querySelector(`.stadiaplus_libraryfilter-game[data-uuid="${game.uuid}"]`);
            const entry = document.querySelector(`.stadiaplus_libraryfilter-listgame[data-uuid="${game.uuid}"]`);
            if (tile != null) tile.classList.toggle('hidden', !visible);
            if (entry != null) entry.classList.toggle('hidden', !visible);
        }
    }

    capturesButton: NavButton;
    async createCaptures() {
        const captures: CaptureItem[] = Array.from(this.renderer.querySelectorAll('.R8zRIf'))
            .map((e: HTMLElement) => new CaptureItem(e))
            .slice(0, 3); // Slice so only the first three captures are shown

        console.log(Array.from(this.renderer.querySelectorAll('.R8zRIf')));

        const popup = $el('div').child($el('h2').text('Your captures'));

        this.capturesButton = new NavButton('photo_camera', null, NavPosition.LEFT);
        this.capturesButton.onClick((event) => {
            this.capturesButton.setActive(true);
            popup.class({ open: true });
            document.querySelectorAll('.n4PrVe').forEach((e: HTMLElement) => (e.style.opacity = '0'));
            event.stopPropagation();
        });
        this.capturesButton.create();

        const previews = $el('div').class({ 'stadiaplus_libraryfilter-captures-previews': true });
        for (const capture of captures) {
            previews.child(
                $el('div')
                    .class({ 'stadiaplus_libraryfilter-captures-preview': true, video: capture.isVideo })
                    .css({ 'background-image': `url(${capture.thumbnail})` })
                    .event({
                        click: () => {
                            console.log('open');
                            capture.open();
                        },
                    })
            );
        }

        previews.child(
            $el('div')
                .class({ 'stadiaplus_libraryfilter-captures-view-all': true })
                .child(
                    $el('i')
                        .class({ 'material-icons-extended': true })
                        .text('more_horiz')
                )
                .child($el('p').text('View all'))
                .event({
                    click: () => {
                        let loc = window.location.href;
                        let split = loc.split('/');
                        split[split.length - 1] = 'captures';
                        window.location.href = split.join('/');
                    },
                })
        );

        popup
            .class({ 'stadiaplus_libraryfilter-captures': true })
            .child(previews)
            .event({ click: (event) => event.stopPropagation() })
            .appendTo(this.capturesButton.element);

        window.addEventListener('click', () => {
            popup.class({ open: false });
            this.capturesButton.setActive(false);
        });
    }

    async createContainer() {
        const root = this.renderer.querySelector('.z1P2me');
        const wrapper = $el('div')
            .class({ 'stadiaplus_libraryfilter-wrapper': true })
            .id(this.id);

        const search = $el('input').element;
        search.addEventListener('input', () => {
            const val = (search as any).value;

            this.renderer.querySelectorAll('.stadiaplus_libraryfilter-game').forEach((element: HTMLElement) => {
                const name = StadiaGameDB.get(element.getAttribute('data-uuid')).name;

                if (!name.toLowerCase().includes(val.toLowerCase())) {
                    element.style['display'] = 'none';
                } else {
                    element.style['display'] = null;
                }
            });

            this.renderer.querySelectorAll('.stadiaplus_libraryfilter-listgame').forEach((element: HTMLElement) => {
                const name = element.querySelector('h6').textContent;

                if (!name.toLowerCase().includes(val.toLowerCase())) {
                    element.style['display'] = 'none';
                } else {
                    element.style['display'] = null;
                }
            });
        });

        this.searchColumn = $el('div')
            .class({ 'stadiaplus_libraryfilter-searchcolumn': true })
            .child(
                $el('div')
                    .class({
                        'stadiaplus_libraryfilter-searchcolumn-bar': true,
                    })
                    .child(
                        $el('i')
                            .class({ 'material-icons-extended': true })
                            .text('search')
                    )
                    .child(search)
            ).element;

        this.gameContainer = $el('div').class({
            'stadiaplus_libraryfilter-gamecontainer': true,
        }).element;

        $el('h2')
            .text('Your Games')
            .css({ 'margin-top': '8rem' })
            .appendTo(wrapper);

        window.addEventListener('click', () => {
            this.renderer.querySelectorAll('.stadiaplus_libraryfilter-dropdown').forEach((e) => {
                e.classList.remove('selected');
            });

            this.renderer.querySelectorAll('.stadiaplus_libraryfilter-game').forEach((e) => {
                e.classList.remove('selected');
            });
        });

        const orderDropdown = this.getOrderDropdown();
        const visibleDropdown = this.getVisibleDropdown();
        $el('div')
            .class({ 'stadiaplus_libraryfilter-bar': true })
            .child(
                $el('div')
                    .css({ display: 'flex', width: '300px' })
                    .child(
                        $el('div')
                            .class({ 'bar-item': true })
                            .event({
                                click: (event) => {
                                    for (const e of this.renderer.querySelectorAll(
                                        '.stadiaplus_libraryfilter-dropdown'
                                    )) {
                                        e.classList.remove('selected');
                                    }
                                    orderDropdown.classList.add('selected');
                                    event.stopPropagation();
                                },
                            })
                            .child(
                                $el('h6')
                                    .class({
                                        'stadiaplus_libraryfilter-sortorderindicator': true,
                                    })
                                    .text(FilterOrder.from(await SyncStorage.LIBRARY_SORT_ORDER.get()).name)
                            )
                            .child(
                                $el('i')
                                    .class({ 'material-icons-extended': true })
                                    .text('keyboard_arrow_down')
                            )
                            .child(orderDropdown)
                    )
                    .child(
                        $el('div')
                            .class({ 'bar-item': true })
                            .event({
                                click: (event) => {
                                    for (const e of this.renderer.querySelectorAll(
                                        '.stadiaplus_libraryfilter-dropdown'
                                    )) {
                                        e.classList.remove('selected');
                                    }
                                    visibleDropdown.classList.add('selected');
                                    event.stopPropagation();
                                },
                            })
                            .child(
                                $el('h6')
                                    .class({
                                        'stadiaplus_libraryfilter-visibilityindicator': true,
                                    })
                                    .text('All')
                            )
                            .child(
                                $el('i')
                                    .class({ 'material-icons-extended': true })
                                    .text('keyboard_arrow_down')
                            )
                            .child(visibleDropdown)
                    )
            )
            .child(
                $el('div')
                    .class({ 'bar-item': true })
                    .child(this.getAutoUpdateButton())
                    .child(this.getAutoUpdateTooltip())
            )
            .appendTo(wrapper);

        const self = this;

        this.tagSelect = new Select(visibleDropdown.querySelector('select[name="tags"]'), {
            placeholder: 'Tags...',
            style: SelectStyle.DARK,
            onChange() {
                self.updateVisibility();
            },
        });

        this.onlineTypeSelect = new Select(visibleDropdown.querySelector('select[name="online-types"]'), {
            placeholder: 'Playstyles...',
            style: SelectStyle.DARK,
            onChange() {
                self.updateVisibility();
            },
        });

        $el('div')
            .class({ stadiaplus_libraryfilter: true })
            .child(this.searchColumn)
            .child(this.gameContainer)
            .appendTo(wrapper);

        $el('h2')
            .text('Captures')
            .css({ 'margin-top': '8rem' })
            .appendTo(wrapper);

        $el('p')
            .html(
                'Your captures are now at the top! Look for the <i class="material-icons-extended" style="vertical-align: bottom">photo_camera</i> icon in the navbar.'
            )
            .css({ 'margin-bottom': '8rem' })
            .appendTo(wrapper);

        wrapper.appendTo(root);
    }

    getAutoUpdateTooltip(): HTMLElement {
        const el = $el('div')
            .class({
                'stadiaplus_libraryfilter-tooltip': true,
                open: localStorage.getItem('autoUpdateTooltip') == null,
            })
            .child(
                $el('h6').html(
                    `<i class="material-icons-extended" style="margin-right: 0.25rem">new_releases</i> Auto Update`
                )
            )
            .child(
                $el('p').text(
                    'Auto Update solves your Stadia+ DB needs by automatically updating your games over time.'
                )
            )
            .child(
                $el('a')
                    .attr({
                        href: 'https://github.com/Mafrans/StadiaPlus/wiki',
                    })
                    .css({ 'text-decoration': 'underline' })
                    .text('Read more')
                    .child(
                        $el('i')
                            .class({
                                'material-icons-extended': true,
                            })
                            .css({
                                'margin-left': '0.25rem',
                                'font-size': '1em',
                            })
                            .text('arrow_forward')
                    )
                    .css({ 'margin-top': '1rem' })
            )
            .child(
                $el('span')
                    .class({ close: true })
                    .event({
                        click: () => {
                            el.class({ open: false });
                            localStorage.setItem('autoUpdateTooltip', 'true');
                        },
                    })
            );

        return el.element;
    }

    getAutoUpdateButton(): HTMLElement {
        if (!StadiaPlusDB.isAuthenticated()) return $el('div').element;

        const el = $el('button')
            .class({
                'stadiaplus_libraryfilter-button': true,
                active: localStorage.getItem('autoUpdate') === 'true',
            })
            .child(
                $el('i')
                    .class({ 'material-icons-extended': true })
                    .text('update')
            )
            .child($el('span').text('Auto Update'));

        el.event({
            mousedown: () => {
                el.class({ hold: true });
            },
            mouseup: () => {
                el.class({ hold: false });
            },
            click: () => {
                el.element.classList.toggle('active');
                localStorage.setItem('autoUpdate', el.element.classList.contains('active') ? 'true' : 'false');
                Util.desandbox(`WebScraperRunnable.setAutoUpdate(${el.element.classList.contains('active')})`);
            },
        });

        return el.element;
    }

    getOrderDropdown(): HTMLElement {
        const dropdown = $el('div')
            .id(this.id + '-dropdown-' + Math.floor(Math.random() * 999999))
            .class({ 'stadiaplus_libraryfilter-dropdown': true });

        for (const order of FilterOrder.values()) {
            dropdown.child(
                $el('h6')
                    .text(order.name)
                    .css({ cursor: 'pointer', 'font-weight': '400' })
                    .event({
                        click: async () => {
                            await SyncStorage.LIBRARY_SORT_ORDER.set(order.id);
                            dropdown.class({ selected: false });
                            this.resortGames();
                        },
                    })
            );
        }

        return dropdown.element;
    }

    getVisibleDropdown(): HTMLElement {
        const tags = $el('select').attr({ name: 'tags', multiple: 'true' });

        for (const tag of StadiaGameDB.Tag.values()) {
            tags.child(
                $el('option')
                    .attr({ value: tag.id })
                    .text(tag.name)
            );
        }

        const onlineTypes = $el('select').attr({
            name: 'online-types',
            multiple: 'true',
        });

        for (const type of StadiaGameDB.OnlineType.values()) {
            onlineTypes.child(
                $el('option')
                    .attr({ value: type.id })
                    .text(type.name)
            );
        }

        return $el('div')
            .id(this.id + '-dropdown-' + Math.floor(Math.random() * 999999))
            .class({ 'stadiaplus_libraryfilter-dropdown': true })
            .event({ click: (event) => event.stopPropagation() })
            .child(
                $el('div')
                    .css({ display: 'block' })
                    .child(tags)
            )
            .child(onlineTypes).element;
    }

    async getSortedGames(): Promise<LibraryGame[]> {
        const filter: FilterOrder = FilterOrder.from(await SyncStorage.LIBRARY_SORT_ORDER.get());
        const games = [...this.games]; // Shallow array clone
        const sorted = filter.sort(games);

        return sorted;
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
            this.updateRenderer();
            if (!this.exists() && this.renderer.querySelector('.fJrLJb') != null) {
                if (this.existsAnywhere()) {
                    document.getElementById(this.id).remove();
                }
                this.reloadLibrary();
            }
        }

        if (!Util.isInGame()) {
            this.updateRenderer();
            if (
                document.querySelector('.stadiaplus_libraryfilter-captures') == null &&
                this.renderer.querySelector('.R8zRIf') != null
            ) {
                this.createCaptures();
            }
        } else if (this.capturesButton != null) {
            this.capturesButton.destroy();
            this.capturesButton = null;
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
        SyncStorage.LIBRARY_GAMES.get().then((libraryGames) => {
            if (libraryGames == null) libraryGames = [];

            const game = (libraryGames as LibraryGame[]).find((a) => a.uuid === uuid);
            if (game != null) {
                this.name = game.name;
                this.visible = game.visible;
            }
        });
    }

    async create(fallbackImage?: string) {
        this.visible = true;
        this.name = this.uuid;
        this.img = fallbackImage;

        const game = StadiaGameDB.get(this.uuid);
        if (game !== undefined) {
            this.name = game.name;
            this.img = game.img;
        }
    }

    createTile(): HTMLElement {
        const el = $el('div')
            .class({ 'stadiaplus_libraryfilter-game': true })
            .attr({ 'data-uuid': this.uuid, 'tab-index': 0 })
            .child(
                $el('img')
                    .class({ 'play-button': true })
                    .attr({
                        src: chrome.runtime.getURL('images/PlayButtonBackground.png'),
                    })
            )
            .child(
                $el('img')
                    .class({ 'play-icon': true })
                    .attr({
                        src: chrome.runtime.getURL('images/PlayButton.png'),
                    })
            )
            .child(
                $el('div')
                    .class({ content: true })
                    .child($el('h6').text(this.name))
            )
            .css({
                display: this.visible ? null : 'none',
                'background-image': this.img !== null ? `url(${this.img})` : null,
            });

        const moreDropdown = this.getMoreDropdown();
        const moreIcon = $el('div')
            .class({
                'more-icon': true,
            })
            .child(
                $el('i')
                    .class({
                        'material-icons-extended': true,
                    })
                    .text('more_vert')
            )
            .child(moreDropdown)
            .event({
                click: (event) => {
                    document
                        .querySelectorAll('.stadiaplus_libraryfilter-dropdown')
                        .forEach((e) => e.classList.remove('selected'));
                    document
                        .querySelectorAll('.stadiaplus_libraryfilter-game')
                        .forEach((e) => e.classList.remove('selected'));

                    moreDropdown.class({ selected: true });
                    el.class({ selected: true });
                    event.stopPropagation();
                },
            });

        el.child(moreIcon);

        return el.element;
    }

    getMoreDropdown() {
        const element = $el('div')
            .class({
                'stadiaplus_libraryfilter-dropdown': true,
            })
            .child(
                $el('div')
                    .html(
                        '<i class="material-icons-extended stadiaplus_icon-inline">open_in_browser</i>Get Desktop Shortcut'
                    )
                    .event({
                        click: () => {
                            window.open(
                                `https://stadiaicons.web.app/${this.uuid}/?fullName=${encodeURIComponent(this.name)}`,
                                '_blank'
                            );
                            element.class({ selected: false });
                        },
                    })
            );

        return element;
    }
}

export class CaptureItem {
    public id: string;
    public ageString: string;
    public thumbnail: string;
    public isVideo: boolean;

    constructor(element: HTMLElement) {
        this.id = element.getAttribute('data-capture-id');
        this.ageString = element.childNodes[3].firstChild.firstChild.textContent;
        this.thumbnail = (element.childNodes[1] as HTMLElement).getAttribute('data-thumbnail');
        this.isVideo = element.querySelector('.sZHcec') != null;
    }

    open(): void {
        (document.querySelector(`.R8zRIf[data-capture-id="${this.id}"]`) as HTMLElement).click();
    }
}

interface CaptureItemButton {
    jsname: string;
    jsaction: string;
    jsdata: string;
    jscontroller: string;
}

/**
 * Different types of filtering, represented as numbers
 *
 * @export the FilterOrder type
 * @class FilterOrder
 */
export class FilterOrder {
    public id: number;
    public name: string;
    public sort: (games: LibraryGame[]) => LibraryGame[];

    /**
     * Default Stadia sorting, recent/new games.
     *
     * @static
     * @memberof FilterOrder
     */
    static RECENT: FilterOrder = {
        id: 0,
        name: 'Recent',
        sort: FilterOrder.sortRecent,
    };

    /**
     * Alphabetical order.
     *
     * @static
     * @memberof FilterOrder
     */
    static ALPHABETICAL: FilterOrder = {
        id: 1,
        name: 'Alphabetical',
        sort: FilterOrder.sortAlphabetical,
    };

    /**
     * Random order.
     *
     * @static
     * @memberof FilterOrder
     */
    static RANDOM: FilterOrder = {
        id: 2,
        name: 'Random',
        sort: FilterOrder.sortRandom,
    };

    static from(id: number): FilterOrder {
        return this.values().find((e) => e.id === id);
    }

    static values() {
        return [FilterOrder.RECENT, FilterOrder.ALPHABETICAL, FilterOrder.RANDOM];
    }

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
    private static sortRecent(games: LibraryGame[]): LibraryGame[] {
        return games;
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
    private static sortAlphabetical(games: LibraryGame[]): LibraryGame[] {
        return games.sort((a, b) => a.name.localeCompare(b.name));
    }

    private static sortRandom(games: LibraryGame[]): LibraryGame[] {
        return Util.shuffle(games);
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
