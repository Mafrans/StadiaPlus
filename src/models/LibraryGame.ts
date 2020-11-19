import { Language } from '../Language';
import { SyncStorage } from '../Storage';
import { StadiaGameDB } from '../StadiaGameDB';
import { $el, ElGen } from '../util/ElGen';

export class LibraryGame {
    public name = 'undefined';
    public img = 'undefined';
    public uuid = 'undefined';
    public visible = true;

    constructor(uuid: string) {
        this.uuid = uuid;
        void SyncStorage.LIBRARY_GAMES.get().then((libraryGames) => {
            if (libraryGames == null) { libraryGames = []; }

            const game = (libraryGames as LibraryGame[]).find((a) => a.uuid === uuid);
            if (game != null) {
                this.name = game.name;
                this.visible = game.visible;
            }
        });
    }

    create(fallbackImage?: string): void {
        this.visible = true;
        this.name = this.uuid;

        if (fallbackImage !== undefined) {
            this.img = fallbackImage;
        }

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
                $el('div')
                    .class({ 'tile-background': true })
                    .css({
                        'background-image': this.img !== '' ? `url(${this.img})` : '',
                    }),
            )
            .child(
                $el('img')
                    .class({ 'play-button': true })
                    .attr({
                        src: chrome.runtime.getURL('images/PlayButtonBackground.png'),
                    }),
            )
            .child(
                $el('img')
                    .class({ 'play-icon': true })
                    .attr({
                        src: chrome.runtime.getURL('images/PlayButton.png'),
                    }),
            )
            .child(
                $el('div')
                    .class({ content: true })
                    .child($el('h6').text(this.name)),
            )
            .class({ tileBackground: true })
            .css({
                display: this.visible ? '' : 'none'
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
                    .text('more_vert'),
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

    getMoreDropdown(): ElGen {
        const element = $el('div')
            .class({
                'stadiaplus_libraryfilter-dropdown': true,
            })
            .child(
                $el('div')
                    .html(
                        `<i class="material-icons-extended stadiaplus_icon-inline">open_in_browser</i>${Language.get('library-filter.get-shortcut')}`,
                    )
                    .event({
                        click: () => {
                            window.open(
                                `https://stadiaicons.web.app/${this.uuid}/?fullName=${encodeURIComponent(this.name)}`,
                                '_blank',
                            );
                            element.class({ selected: false });
                        },
                    }),
            );

        return element;
    }
}
