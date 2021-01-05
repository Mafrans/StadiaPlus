/* eslint-disable no-restricted-globals */
import { Component } from '../Component';
import Logger from '../Logger';
import Util from '../util/Util';
import './styles/LibraryFilter.scss';
import { Select } from '../ui/Select';
import { SelectStyle } from '../models/SelectStyle';
import { Language } from '../Language';
import { SyncStorage } from '../Storage';
import '../ui/styles/Button.scss';
import { StadiaPlusDBHook } from './StadiaPlusDBHook';
import { StadiaPlusDB } from '../StadiaPlusDB';
import { StadiaGameDB } from '../StadiaGameDB';
import { $el, $sel } from '../util/ElGen';
import { NavButton } from '../ui/NavButton';
import { NavPosition } from '../models/NavPosition';
import { OrderDirection } from '../models/OrderDirection';
import { LibraryGame } from '../models/LibraryGame';
import { FilterOrder } from '../models/FilterOrder';
import { CaptureItem } from '../models/CaptureItem';
import { AFLibraryData } from '../models/AFLibraryData';
import { Checkbox } from '../ui/Checkbox';
import { CheckboxShape } from '../models/CheckboxShape';

const { Array } = window;

/**
 * A filtering system allowing hiding and showing specific
 * games in your library as well as ordering them by name.
 *
 * @export the LibraryFilter type
 * @class LibraryFilter
 * @extends {Component}
 */
export class LibraryFilter extends Component {
    /**
     * The component tag, used in language files.
     */
    tag = 'library-filter';

    /**
     * List of games and game data imported from the DOM
     */
    games: LibraryGame[] = [];
    sorted: LibraryGame[] = [];

    /**
     * Filter bar allowing for controls of the library filter
     */
    filterBar?: HTMLElement;

    /**
     * Select box used to order the games
     */
    select?: Select;

    /**
     * Current filtering order
     */
    order?: FilterOrder;

    /**
     * Should all games be shown regardless if theyre hidden or not?
     */
    showAll?: boolean;

    /**
     * Checkbox showing hidden games.
     */
    checkbox?: HTMLElement;

    /**
     * Direction of which games will be ordered.
     */
    direction?: OrderDirection;

    /**
     * A list of all games in your library.
     */
    gameTiles?: NodeList;

    /**
     * Web Scraper
     */
    db: StadiaPlusDBHook;

    searchColumn?: HTMLElement;
    gameContainer?: HTMLElement;

    tagSelect?: Select;
    onlineTypeSelect?: Select;

    constructor(webScraper: StadiaPlusDBHook) {
        super();

        this.db = webScraper;
    }

    getGames(): LibraryGame[] {
        const initDataCallback = Array.from(document.querySelectorAll('body>script')).find(
            (script) => script.attributes
                && script.attributes.length === 1
                && script.hasAttribute('nonce')
                && script.textContent?.substring(0, 19) === 'AF_initDataCallback'
                && script.textContent?.includes("key: 'ds:6"),
        )?.textContent;

        // eslint-disable-next-line no-eval
        const libraryData = eval(`(() => (${initDataCallback?.substring('AF_initDataCallback('.length, initDataCallback.length - ');'.length) as string}))()`) as AFLibraryData;
        const games: LibraryGame[] = [];

        libraryData.data[1].forEach((game) => {
            const uuid = game[1][0];
            const gameId = game[1][1];

            games.push(new LibraryGame(uuid, gameId, this));
        });

        return games;
    }

    /**
     * Runs when the component has loaded
     *
     * @memberof LibraryFilter
     */
    onStart(): void {
        this.active = true;

        Logger.component(
            Language.get('component.enabled', { name: this.name }),
        );

        FilterOrder.values().forEach((e) => {
            e.name = Language.get(`library-filter.${e.name}`);
        });
    }

    async reloadLibrary(): Promise<void> {
        Logger.info('Reloading Library');

        if ((await SyncStorage.LIBRARY_SORT_ORDER.get()) == null) {
            await SyncStorage.LIBRARY_SORT_ORDER.set(FilterOrder.RECENT.id);
        }

        this.games = this.getGames();

        Util.desandbox(
            `WebScraperRunnable.setAutoUpdate(${
                StadiaPlusDB.isAuthenticated()
                && localStorage.getItem('autoUpdate') === 'true'
                    ? 'true'
                    : 'false'
            })`,
        );

        void this.resortGames();
    }

    updateGames(sorted: LibraryGame[]): void {
        Util.desandbox(
            `WebScraperRunnable.games = ${JSON.stringify(
                sorted.map((e) => e.uuid),
            )}`,
        );

        sorted.forEach((game) => {
            game.card?.parentNode?.append(game.card);

            if (game.listEntry === undefined && game.card !== undefined) {
                const splitPlayerURL = location.href.split('/');
                splitPlayerURL[
                    splitPlayerURL.length - 1
                ] = `player/${game.uuid}`;
                const playerURL = splitPlayerURL.join('/');

                game.listEntry = $el('div')
                    .class({ 'stadiaplus_libraryfilter-listgame': true })
                    .attr({ 'data-uuid': game.uuid })
                    .child($el('hr'))
                    .child(
                        $el('h6').html(
                            `<i class="material-icons-extended">play_circle_outline</i> ${game.name}`,
                        ),
                    ).element as HTMLDivElement;

                game.listEntry.addEventListener('click', () => {
                    location.href = playerURL;
                });
            }

            if (game.listEntry) {
                this.searchColumn?.appendChild(game.listEntry);
            }
        });
    }

    async resortGames(): Promise<void> {
        const searchBar = this.renderer?.querySelector(
            '.stadiaplus_libraryfilter-searchcolumn-bar>input',
        ) as HTMLInputElement;
        if (searchBar !== null) {
            searchBar.value = '';
        }

        this.games.forEach((game) => {
            if (game.card !== undefined) {
                game.card.style.display = '';
            }
        });

        const orderIndicator = this.renderer?.querySelector(
            '.stadiaplus_libraryfilter-sortorderindicator',
        );
        if (orderIndicator != null) {
            orderIndicator.textContent = FilterOrder.from(
                (await SyncStorage.LIBRARY_SORT_ORDER.get()) as number,
            ).name;
        }

        this.updateGames(await this.getSortedGames());

        void this.updateVisibility();
    }

    updateVisibility(): void {
        const tags = (this.tagSelect?.get() as string[]).map((id) => StadiaGameDB.Tag.fromId(id));
        const onlineTypes = (this.onlineTypeSelect?.get() as string[])
            .map((id) => StadiaGameDB.OnlineType.fromId(id));

        let anyGameHidden = false;
        this.games.forEach((game) => {
            const sgdb = StadiaGameDB.get(game.uuid);
            let visible = true;

            tags.forEach((tag) => {
                if (sgdb.tags.find((e) => e?.id === tag?.id) == null) {
                    visible = false;
                }
            });

            onlineTypes.forEach((type) => {
                if (sgdb.onlineTypes.find((e) => e?.id === type?.id) == null) {
                    visible = false;
                }
            });

            if (!game.visible && !this.showAll) {
                visible = false;
                anyGameHidden = true;
            }

            if (game.card !== undefined) {
                game.card.classList.toggle('hidden', !game.visible);
                game.card.style.display = visible ? '' : 'none';
            }
            if (game.listEntry !== undefined) {
                game.listEntry.classList.toggle('hidden', !game.visible);
                game.listEntry.style.display = visible ? '' : 'none';
            }
        });

        const visibilityIndicator = document.querySelector(
            '.stadiaplus_libraryfilter-visibilityindicator',
        );
        if (visibilityIndicator !== null) {
            if (tags.length === 0 && onlineTypes.length === 0 && !anyGameHidden) {
                visibilityIndicator.textContent = Language.get(
                    'library-filter.all-visible',
                );
            } else {
                visibilityIndicator.textContent = Language.get(
                    'library-filter.custom-visible',
                );
            }
        }
    }

    async saveGameData(): Promise<void> {
        await SyncStorage.LIBRARY_GAMES.set(this.games.map((game) => ({
            uuid: game.uuid, visible: game.visible,
        })));
    }

    capturesButton?: NavButton;
    createCaptures(): void {
        if (this.renderer === undefined) {
            Logger.error('Renderer is undefined');
            return;
        }

        const captures: CaptureItem[] = Array.from(
            this.renderer.querySelectorAll('.MykDQe'),
        )
            .map((e: Element) => new CaptureItem(e as HTMLElement))
            .slice(0, 3); // Slice so only the first three captures are shown

        const popup = $el('div').child(
            $el('h2').text(Language.get('library-filter.your-captures')),
        );

        this.capturesButton = new NavButton(
            'photo_camera',
            undefined,
            NavPosition.LEFT,
        );
        this.capturesButton.onClick((event) => {
            this.capturesButton?.setActive(true);
            popup.class({ open: true });
            document.querySelectorAll('.n4PrVe').forEach((e: Element) => {
                (e as HTMLElement).style.opacity = '0';
            });
            event.stopPropagation();
        });
        this.capturesButton.create();

        const previews = $el('div').class({
            'stadiaplus_libraryfilter-captures-previews': true,
        });
        captures.forEach((capture) => {
            previews.child(
                $el('div')
                    .class({
                        'stadiaplus_libraryfilter-captures-preview': true,
                        video: capture.isVideo,
                    })
                    .css({
                        'background-image': `url(${capture.thumbnail as string})`,
                    })
                    .event({
                        click: () => {
                            capture.open();
                        },
                    }),
            );
        });

        previews.child(
            $el('div')
                .class({ 'stadiaplus_libraryfilter-captures-view-all': true })
                .child(
                    $el('i')
                        .class({ 'material-icons-extended': true })
                        .text('more_horiz'),
                )
                .child($el('p').text('View all'))
                .event({
                    click: () => {
                        const loc = window.location.href;
                        const split = loc.split('/');
                        split[split.length - 1] = 'captures';
                        window.location.href = split.join('/');
                    },
                }),
        );

        popup
            .class({ 'stadiaplus_libraryfilter-captures': true })
            .child(previews)
            .event({ click: (event) => event.stopPropagation() })
            .appendTo(this.capturesButton.element);

        window.addEventListener('click', () => {
            popup.class({ open: false });
            this.capturesButton?.setActive(false);
        });
    }

    async createContainer(): Promise<void> {
        if (this.renderer === undefined) {
            Logger.error('Renderer is undefined');
            return;
        }

        const root = $sel(
            this.renderer.querySelector('.f2pfBf') as HTMLElement,
        );
        root.id( this.id )
            .class({'stadiaplus_libraryfilter-wrapper': true});
        const barContainer = root.$sel('.lEPylf:first-child');

        const gameContainer = root
            .$sel('.lEPylf:last-child');
        if (root === null || barContainer === null) return;

        const orderDropdown = this.getOrderDropdown();
        const visibleDropdown = this.getVisibleDropdown();
        $el('div')
            .class({ 'stadiaplus_libraryfilter-bar': true })
            .child(
                $el('div')
                    .class({ 'bar-dropdowns': true })
                    .child(
                        $el('div')
                            .class({ 'bar-item': true })
                            .event({
                                click: (event) => {
                                    this.renderer
                                        ?.querySelectorAll(
                                            '.stadiaplus_libraryfilter-dropdown',
                                        )
                                        .forEach((element) => {
                                            element.classList.remove(
                                                'selected',
                                            );
                                        });
                                    orderDropdown.classList.add('selected');
                                    event.stopPropagation();
                                },
                            })
                            .child(
                                $el('h6')
                                    .class({
                                        'stadiaplus_libraryfilter-sortorderindicator': true,
                                    })
                                    .text(
                                        FilterOrder.from(
                                            (await SyncStorage.LIBRARY_SORT_ORDER.get()) as number,
                                        ).name,
                                    ),
                            )
                            .child(
                                $el('i')
                                    .class({ 'material-icons-extended': true })
                                    .text('keyboard_arrow_down'),
                            )
                            .child(orderDropdown),
                    )
                    .child(
                        $el('div')
                            .class({ 'bar-item': true })
                            .event({
                                click: (event) => {
                                    this.renderer
                                        ?.querySelectorAll(
                                            '.stadiaplus_libraryfilter-dropdown',
                                        )
                                        .forEach((element) => {
                                            element.classList.remove(
                                                'selected',
                                            );
                                        });

                                    visibleDropdown.classList.add('selected');
                                    event.stopPropagation();
                                },
                            })
                            .child(
                                $el('h6')
                                    .class({
                                        'stadiaplus_libraryfilter-visibilityindicator': true,
                                    })
                                    .text('All'),
                            )
                            .child(
                                $el('i')
                                    .class({ 'material-icons-extended': true })
                                    .text('keyboard_arrow_down'),
                            )
                            .child(visibleDropdown),
                    ),
            )
            .child(
                $el('div')
                    .class({
                        'bar-item': true,
                        'searchcolumn-toggle': true
                    })
                    .child(
                        $el('button')
                            .class({ 'stadiaplus_libraryfilter-button': true })
                            .event({
                                click: (event) => {
                                    this.renderer?.querySelectorAll(
                                        '.stadiaplus_libraryfilter-wrapper'
                                    ).forEach((element) => {
                                        element.classList.toggle( 'searchcolumn-shown' );
                                    });

                                    event.stopPropagation();
                                },
                            })
                            .child(
                                $el('i')
                                    .class({
                                        'material-icons-extended': true,
                                        'searchcolumn-toggle-icon-search': true
                                    })
                                    .text('search')
                            )
                            .child(
                                $el('i')
                                    .class({
                                        'material-icons-extended': true,
                                        'searchcolumn-toggle-icon-back': true
                                    })
                                    .text('arrow_back')
                            )
                    )
            )
            .child(
                $el('div')
                    .class({ 'bar-item': true })
                    .child(this.getAutoUpdateButton())
                    .child(this.getAutoUpdateTooltip()),
            )
            .appendTo(barContainer);

        const gameWrapper = $el('div')
            .class({ stadiaplus_libraryfilter: true, lEPylf: true });
        gameWrapper.appendTo(root);
        gameContainer?.appendTo(gameWrapper);

        const search = $el('input').element as HTMLInputElement;
        search.addEventListener('keydown', (event) => {
            let val = search.value;

            switch (event.code) {
                // Yes, I'm aware that delete has a different function than
                // backspace but I literally cannot bother.
                case 'Delete':
                case 'Backspace':
                    if (search.selectionStart !== null
                            && search.selectionEnd !== null
                            && search.selectionEnd - search.selectionStart !== 0) {
                        val = val.substring(0, search.selectionStart)
                            + val.substring(search.selectionEnd, val.length);
                    } else if (event.ctrlKey || event.metaKey) {
                        const split = val.split(/[^A-Za-z0-9]/g);

                        let i = split.length - 1;
                        while (i > 0 && split[i].length === 0) {
                            i -= 1;
                        }

                        val = val.substring(0, Math.min(
                            search.selectionStart === null
                                ? val.length - split[i].length
                                : search.selectionStart,

                            val.length - split[i].length,
                        ));
                    } else {
                        val = val.substring(0, Math.min(
                            search.selectionStart === null
                                ? val.length - 1
                                : search.selectionStart,

                            val.length - 1,
                        ));
                    }
                    break;

                case 'Space':
                    val += ' ';
                    break;

                case 'ArrowRight':
                    if (search.selectionStart !== null && search.selectionEnd !== null) {
                        search.setSelectionRange(search.selectionStart + 1, search.selectionStart + 1, 'forward');
                    }
                    break;

                case 'ArrowLeft':
                    if (search.selectionStart !== null && search.selectionEnd !== null) {
                        search.setSelectionRange(search.selectionStart - 1, search.selectionStart - 1, 'backward');
                    }
                    break;

                case 'ArrowUp':
                    search.setSelectionRange(val.length, val.length, 'forward');
                    break;

                case 'ArrowDown':
                    search.setSelectionRange(0, 0, 'backward');
                    break;

                default:
                    if (!event.ctrlKey && !event.metaKey && !event.altKey) {
                        if (/(Key|Digit)[A-Z0-9]/.test(event.code)) {
                            val += event.key;
                        }
                    }
                    break;
            }

            this.games.forEach((game) => {
                if (game.name.toLowerCase().includes(val.toLowerCase())) {
                    if (game.card !== undefined) {
                        game.card.style.display = '';
                    }
                    if (game.listEntry !== undefined) {
                        game.listEntry.style.display = '';
                    }
                } else {
                    if (game.card !== undefined) {
                        game.card.style.display = 'none';
                    }
                    if (game.listEntry !== undefined) {
                        game.listEntry.style.display = 'none';
                    }
                }
            });

            search.focus();

            // event.stopPropagation();
            // event.stopImmediatePropagation();

            // for (let i = 0; i < 999; i += 1) {
            //     console.log('s');
            // }

            // this.renderer
            //     ?.querySelectorAll('.stadiaplus_libraryfilter-listgame')
            //     .forEach((el: Element) => {
            //         const element = el as HTMLElement;
            //         const name = element.querySelector('h6')?.textContent;
            //         if (name == null) return;

            //         if (!name.toLowerCase().includes(val.toLowerCase())) {
            //             element.style.display = 'none';
            //         } else {
            //             element.style.display = '';
            //         }
            //     });
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
                            .text('search'),
                    )
                    .child(search),
            ).element;

        window.addEventListener('click', () => {
            this.renderer
                ?.querySelectorAll('.stadiaplus_libraryfilter-dropdown')
                .forEach((e) => {
                    e.classList.remove('selected');
                });

            this.renderer
                ?.querySelectorAll('.stadiaplus_libraryfilter-game')
                .forEach((e) => {
                    e.classList.remove('selected');
                });
        });

        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const self = this;

        const tagSelectElement = visibleDropdown.querySelector(
            'select[name="tags"]',
        );
        if (tagSelectElement !== null) {
            this.tagSelect = new Select(tagSelectElement, {
                placeholder: 'Tags...',
                style: SelectStyle.DARK,
                onChange() {
                    self.updateVisibility(); // TODO: Fix this without using aliasing
                },
            });
        }

        const typeSelectElement = visibleDropdown.querySelector(
            'select[name="online-types"]',
        );
        if (typeSelectElement !== null) {
            this.onlineTypeSelect = new Select(typeSelectElement, {
                placeholder: 'Playstyles...',
                style: SelectStyle.DARK,
                onChange() {
                    self.updateVisibility(); // TODO: Fix this without using aliasing
                },
            });
        }

        $el('div')
            .class({ stadiaplus_libraryfilter: true })
            .child(this.searchColumn)
            .prependTo(gameWrapper);

        $el('h2')
            .text('Captures')
            .css({ 'margin-top': '8rem' })
            .appendTo(root);

        $el('p')
            .html(Language.get('library-filter.captures-note'))
            .css({ 'margin-bottom': '8rem' })
            .appendTo(root);
    }

    getAutoUpdateTooltip(): HTMLElement {
        const el = $el('div')
            .class({
                'stadiaplus_libraryfilter-tooltip': true,
                open: localStorage.getItem('autoUpdateTooltip') == null,
            })
            .child(
                $el('h6').html(
                    '<i class="material-icons-extended" style="margin-right: 0.25rem">new_releases</i> Auto Update',
                ),
            )
            .child(
                $el('p').text(
                    'Auto Update solves your Stadia+ DB needs by automatically updating your games over time.',
                ),
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
                            .text('arrow_forward'),
                    )
                    .css({ 'margin-top': '1rem' }),
            )
            .child(
                $el('span')
                    .class({ close: true })
                    .event({
                        click: () => {
                            el.class({ open: false });
                            localStorage.setItem('autoUpdateTooltip', 'true');
                        },
                    }),
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
                    .text('update_disabled'),
            )
            .child(
                $el('i')
                    .class({ 'material-icons-extended': true })
                    .text('update'),
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
                localStorage.setItem(
                    'autoUpdate',
                    el.element.classList.contains('active') ? 'true' : 'false',
                );
                Util.desandbox(
                    `WebScraperRunnable.setAutoUpdate(${el.element.classList
                        .contains('active')
                        .toString()})`,
                );
            },
        });

        return el.element;
    }

    getOrderDropdown(): HTMLElement {
        const dropdown = $el('div')
            .id(`${this.id}-dropdown-${Math.floor(Math.random() * 999999)}`)
            .class({ 'stadiaplus_libraryfilter-dropdown': true });

        FilterOrder.values().forEach((order) => {
            dropdown.child(
                $el('h6')
                    .text(order.name)
                    .css({ cursor: 'pointer', 'font-weight': '400' })
                    .event({
                        click: async () => {
                            await SyncStorage.LIBRARY_SORT_ORDER.set(order.id);
                            dropdown.class({ selected: false });
                            void this.resortGames();
                        },
                    }),
            );
        });

        return dropdown.element;
    }

    getVisibleDropdown(): HTMLElement {
        const tags = $el('select').attr({ name: 'tags', multiple: 'true' });

        StadiaGameDB.Tag.values().forEach((tag) => {
            tags.child(
                $el('option')
                    .attr({ value: tag.id })
                    .text(tag.name),
            );
        });

        const onlineTypes = $el('select').attr({
            name: 'online-types',
            multiple: 'true',
        });

        StadiaGameDB.OnlineType.values().forEach((type) => {
            onlineTypes.child(
                $el('option')
                    .attr({ value: type.id })
                    .text(type.name),
            );
        });

        const showAllCheckbox = new Checkbox(Language.get('library-filter.show-hidden')).setShape(CheckboxShape.CURVED).build();

        return $el('div')
            .id(`${this.id}-dropdown-${Math.floor(Math.random() * 999999)}`)
            .class({ 'stadiaplus_libraryfilter-dropdown': true })
            .event({ click: (event) => event.stopPropagation() })
            .child(
                $el('div')
                    .css({ display: 'block' })
                    .child(showAllCheckbox.pretty)
                    .event({
                        click: () => {
                            this.showAll = showAllCheckbox.checkbox.checked;
                            this.updateVisibility();
                        },
                    }),
            )
            .child(
                $el('div')
                    .css({ display: 'block' })
                    .child(tags),
            )
            .child(onlineTypes).element;
    }

    async getSortedGames(): Promise<LibraryGame[]> {
        const filter: FilterOrder = FilterOrder.from(
            (await SyncStorage.LIBRARY_SORT_ORDER.get()) as number,
        );
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
        Logger.component(
            Language.get('component.disabled', { name: this.name }),
        );
    }

    /**
     * Runs every second, creates and updates elements.
     *
     * @memberof LibraryFilter
     */
    onUpdate(): void {
        if (Util.isInHome()) {
            this.updateRenderer();
            if (
                !this.exists()
                && this.renderer?.querySelector('.f2pfBf') != null
            ) {
                void this.createContainer();
                void this.reloadLibrary();
            }
        }

        if (!Util.isInGame()) {
            this.updateRenderer();
            if (
                document.querySelector('.stadiaplus_libraryfilter-captures')
                    == null
                && this.renderer?.querySelector('.E3eEyc.lEPylf.sfe1Ff') != null
            ) {
                this.createCaptures();
            }
        } else if (this.capturesButton != null) {
            this.capturesButton.destroy();
            this.capturesButton = undefined;
        }
    }
}
