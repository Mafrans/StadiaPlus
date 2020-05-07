import { Component } from '../Component';
import Logger from '../Logger';
import Util from '../Util';
import { UIButton } from '../ui/UIButton';
import { UIRow } from '../ui/UIRow';
import { UIComponent } from '../ui/UIComponent';
import './styles/UITab.scss';
import '../ui/styles/Button.scss';
import '../styles/Grid.scss';
import '../styles/Typography.scss';
import { Language } from '../Language';

const chrome: any = (window as any).chrome;

/**
 * A tab and button displayed in the Stadia Menu.
 *
 * @export the UITab type.
 * @class UITab
 * @extends {Component}
 */
export class UITab extends Component {
    /**
     * The name of the Component.
     */
    tag: string = 'ui-tab';

    /**
     * The tab element.
     */
    element: HTMLElement;

    /**
     * The [[UIComponent]] used to display the tab.
     */
    component: UIComponent;

    /**
     * The [[UIButton]] used to open the tab.
     */
    button: UIButton;

    /**
     * An amount of rows, each containing content.
     */
    rows: UIRow[] = [];

    /**
     * A list of fun MOTD messages added to the tab.
     */
    motdList: string[] = [
        '<img src="https://cdn.discordapp.com/emojis/636227864076746772.png?v=1" style="display: inline-flex; width: 24px">',
        "Don't look here, look below!",
        'Reality can be whatever I want.',
        'If you ask nicely, Stadia might even do your laundry for you!',
        'Have you tried asking customer support?',
        'Follow u/mafrans on Reddit!',
        'Stadia+, like Google+ but still alive.',
        'Stadia is DOA, believe me.',
        'Get a load of this guy, using chrome extensions to improve his Stadia experience.',
        "I'm telling you, don't trust that guy. You know, the guy.",
        'Shoutout to Chris and Grace!',
        'Have you tried Splitlings yet?',
        'Always check the ratings before you buy a new game.',
        'Have you tried GeForce Now?',
        'A hot dog is definitely not a sandwich.',
        'Idk about you, but I really want one of those fancy smart toilets.',
        'Chris is typing guys!!',
        'Does anyone have a buddy pass I could borrow?',
        'I paid $139 for this?',
        'Is Fortnite on Stadia yet?',
        'u/baconrules was the first to see 4k!',
        'So did the person that made the stadia+ extension give up on stadia?',
        'It\'s like GFN, but without any pulled games.',
        'Long live Geforce Now+',
        'Spend your money before it runs out.',
    ];

    constructor() {
        super();
    }

    /**
     * Creates a [[UIComponent]] and a [[UIButton]]
     *
     * @memberof UITab
     */
    createElement(): void {
        this.component = new UIComponent(
            'Stadia+',
            `
                <i 
                    class="stadiaplus_muted" 
                    style="margin-top: 1rem; margin-bottom: 5rem; display: block"
                >
                    ${
                        this.motdList[
                            Math.floor(Math.random() * this.motdList.length)
                        ]
                    }
                </i>
            `,
            this.id,
        );

        const icon = chrome.runtime.getURL('images/icons/stadiaplus.svg');
        this.button = new UIButton(icon, Language.get('ui-tab.button-label'), this.id + '-button');
    }

    /**
     * Append all rows that don't already exist.
     *
     * @param {boolean} [reload]
     * @memberof UITab
     */
    createRows(reload?: boolean): void {
        let i = 0;
        this.rows.forEach(row => {
            if(!row.exists()) {
                row.append(this.component, i > 0);
            }
            else if(reload) {
                row.reload();
            }
            i++
        });
    }

    /**
     * Reload all rows
     *
     * @memberof UITab
     */
    reloadRows(): void {
        this.rows.forEach(row => row.reload());
    }

    /**
     * Add a row to the list.
     *
     * @memberof UITab
     */
    addRow(row: UIRow): void {
        this.rows.push(row);
    }

    /**
     * Clear and unload all rows.
     * 
     * @memberof UITab
     */
    clearRows(): void {
        for(const row of this.rows) {
            row.element.remove();
        }

        this.rows = [];
    }

    /**
     * Called on startup, initializes important variables.
     * 
     * @memberof UITab
     */
    onStart(): void {
        this.active = true;
        this.createElement();

        Logger.component(Language.get('component.enabled', { name: this.name }));
    }

    /**
     * Called on stop, makes sure to dispose of elements and variables.
     * 
     * @memberof UITab
     */
    onStop(): void {
        this.active = false;
        this.button.element.remove();
        this.button.destroy();
        this.component.element.remove();

        this.rows.forEach(row => {
            row.element.remove();
        });

        Logger.component(Language.get('component.disabled', { name: this.name }));
    }

    /**
     * Called every second, makes sure to create components if they don't already exist.
     * 
     * @memberof UITab
     */
    onUpdate(): void {
        // Only create components if the menu is open already.
        if (Util.isMenuOpen() && Util.isInGame()) {
            if (!this.exists()) {
                this.updateRenderer();
                this.component.create();
                this.createRows(true);

                const self = this;
                this.button.create(() => {
                    self.button.button.addEventListener('click', () => {
                        this.createRows(true);
                        self.component.openTab();
                    });
                });
            }
            
            if(!this.button.container.exists()) {
                this.button.container.create();
            }
        }
        else if(this.component.open) {
            this.component.closeTab();
        }
    }
}