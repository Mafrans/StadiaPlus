import { LibraryFilter } from '../components/LibraryFilter';
import { Language } from '../Language';
import { SyncStorage } from '../Storage';
import { $el, ElGen } from '../util/ElGen';
import Util from '../util/Util';

export class LibraryGame {
    private libraryFilter: LibraryFilter;
    public name = 'undefined';
    public uuid = 'undefined';
    public gameId = 'undefined';
    public card?: HTMLDivElement;
    public listEntry?: HTMLDivElement;
    public visible = true;

    constructor(uuid: string, gameId: string, libraryFilter: LibraryFilter) {
        this.libraryFilter = libraryFilter;
        this.uuid = uuid;
        this.gameId = gameId;
        void SyncStorage.LIBRARY_GAMES.get().then((libraryGames) => {
            if (libraryGames == null) { libraryGames = []; }

            const game = (libraryGames as LibraryGame[]).find((a) => a.uuid === uuid);
            if (game != null) {
                this.visible = game.visible;
            }
        });

        if (Util.isInHome()) {
            const tile = Array.from(document.querySelectorAll('.GqLi4d')).find((tile) => tile.getAttribute('jsdata')?.includes(this.gameId)) as HTMLDivElement;
            this.name = this.getName(tile);
            this.createTile(tile);
        }
    }

    getName(tile: HTMLDivElement) {
        return tile.querySelector('h3.xmcLFc')?.textContent as string
    }

    createTile(tile: HTMLDivElement) {
        if(tile === undefined || tile.parentElement === null) return;

        this.card = $el('div')
            .class({ 'stadiaplus_libraryfilter-game': true })
            .attr({ uuid: this.uuid }).element as HTMLDivElement;
        tile.parentElement.prepend(this.card);
        this.card.prepend(tile);

        const dropdown = this.getMoreDropdown();
        const { element } = $el('div')
            .class({ 'more-icon': true })
            .child(
                $el('i')
                    .class({ 'material-icons-extended': true })
                    .text('more_vert'),
            )
            .child(dropdown);

        element.addEventListener('mousedown', () => {
            if (this.card !== undefined) {
                this.card.style.pointerEvents = 'none';
            }
        });

        window.addEventListener('mouseup', () => {
            if (this.card !== undefined) {
                if (this.card.style.pointerEvents === 'none') {
                    this.card.style.pointerEvents = '';
                    setTimeout(() => {
                        dropdown.element.classList.add('selected');
                    }, 100);
                }
            }
        });

        this.card.appendChild(element);
    }

    getMoreDropdown(): ElGen {
        const element = $el('div')
            .class({
                'stadiaplus_libraryfilter-dropdown': true,
            })
            .child(
                $el('div')
                    .child(
                        $el('i')
                            .class({
                                'material-icons-extended': true,
                                'stadiaplus_icon-inline': true,
                            })
                            .text('open_in_browser'),
                    )
                    .child(
                        $el('span')
                            .text(Language.get('library-filter.get-shortcut')),
                    )
                    .event({
                        click: ( event) => {
                            window.open(
                                `https://stadiaicons.web.app/${this.uuid}/?fullName=${encodeURIComponent(this.name)}`,
                                '_blank',
                            );
                            element.class({ selected: false });
                            event.stopPropagation();
                        },
                    }),
            )
            .child(
                $el('div')
                    .id(`${this.uuid}-hideoption`)
                    .child(
                        $el('i')
                            .class({
                                'material-icons-extended': true,
                                'stadiaplus_icon-inline': true,
                            })
                            .text(this.visible ? 'visibility_off' : 'visibility'),
                    )
                    .child(
                        $el('span')
                            .text(Language.get(this.visible ? 'library-filter.hide-game' : 'library-filter.show-game', { name: this.name })),
                    )
                    .event({
                        click: (event) => {
                            const self = document.getElementById(`${this.uuid}-hideoption`);
                            // Always true, but should exist to appease the linting gods
                            if (self !== null) {
                                const icon = self.querySelector('i');
                                const text = self.querySelector('span');

                                // Always true, but should exist to appease the linting gods
                                if (icon !== null && text != null) {
                                    if (this.visible) {
                                        icon.textContent = 'visibility_off';
                                        text.textContent = Language.get('library-filter.hide-game', { name: this.name });
                                    } else {
                                        icon.textContent = 'visibility';
                                        text.textContent = Language.get('library-filter.show-game', { name: this.name });
                                    }
                                }
                            }

                            this.visible = !this.visible;
                            void this.libraryFilter.saveGameData();
                            this.libraryFilter.updateVisibility();
                            element.class({ selected: false });

                            event.stopPropagation();
                        },
                    }),
            );

        return element;
    }
}
