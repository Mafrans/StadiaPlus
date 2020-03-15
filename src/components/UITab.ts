import { Component } from '../Component';
import Logger from '../Logger';
import Util from '../Util';
import './styles/UITab.scss';

const chrome: any = (window as any).chrome;

/**
 * A simple clock displayed in the Stadia Menu.
 *
 * @export the Clock type.
 * @class Clock
 * @extends {Component}
 */
export class UITab extends Component {
    /**
     * The name of the Component.
     */
    name: string = 'UI Tab';

    /**
     * The clock element.
     */
    element: HTMLElement;
    component: UIComponent;
    button: UIButton;

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
    ];

    constructor() {
        super();
    }

    /**
     * Creates a simple <span>, adds the right classes, and stores it in [@link #element]
     */
    createElement() {
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
                
                <p>Network Overlay</p>
                <div class="overlay-toggle-container"></div>
                <hr />
                
                <p>Force Codec</p>
                <div class="codec-container"></div>
                <hr />
                
                <p>Force Resolution</p>
                <div class="force-resolution-container"></div>
            `,
            this.id,
        );

        const icon = chrome.runtime.getURL('images/icons/stadiaplus.svg');
        this.button = new UIButton(icon, 'Stadia+', this.id + '-button');
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
        this.button.element.remove();
        this.button.button.remove();
        this.button.container.remove();
        this.component.element.remove();

        Logger.component('Component', this.name, 'has been disabled');
    }

    /**
     * Called every second, updates the element to match the clock.
     */
    onUpdate() {
        // Only update the clock when it's visible
        if (Util.isMenuOpen()) {
            if (!this.exists()) {
                this.component.create();

                const self = this;
                this.button.create(() => {
                    self.button.button.addEventListener('click', () => {
                        self.component.open();
                    });
                });
            }
        }
    }
}

class UIComponent {
    id: string;
    html: string;
    element: Element;

    constructor(title: string, content: string, id: string) {
        this.id = id;
        this.html = `
            <header>
                <div class="rkvT7c" jsaction="click:a4fUwd" jsname="GeGHKb">
                    <span class="DPvwYc tRqc3c" aria-hidden="true">arrow_back</span>
                </div>
                <span class="Q3wyyb">
                    <div class="CwCxFd">${title}</div>
                </span>
            </header>

            <div class="content">
                ${content}
            </div>
        `;

        this.element = document.createElement('div');
        this.element.id = this.id;
        this.element.classList.add('stadiaplus_ui-component');
    }

    create(): void {
        this.element.innerHTML = this.html;

        const container = document.querySelector('.hxhAyf.fi8Jxd');
        container.appendChild(this.element);

        // ReQuery element since outerHTML breaks it.
        this.element = document.getElementById(this.id);

        const backBtn = document.querySelector(
            '.stadiaplus_ui-component > header > .rkvT7c',
        );
        const self = this;
        backBtn.addEventListener('click', () => {
            self.close();
        });
    }

    open(): void {
        this.element.classList.add('open');
    }

    close(): void {
        this.element.classList.remove('open');
    }
}

class UIButton {
    id: string;
    html: string;
    element: Element;
    container: Element;
    button: Element;

    constructor(icon: string, title: string, id: string) {
        this.id = id;
        this.html = `
            <div class="Pyflbb" jsname="rZHESd">
                <div class="KEaHo">
                    <span class="X5peoe" jsname="pYFhU">
                        <img class="xduoyf" src="${icon}">
                    </span>
                    <span class="caSJV">${title}</span>
                </div>
            </div>
        `;

        this.element = document.createElement('div');
        this.element.id = id;
        this.element.classList.add('Pyf1bb', 'stadiaplus_ui-button');

        this.button = document.createElement('div');
        this.button.setAttribute('role', 'button');
        this.button.setAttribute('tabindex', '0');
        this.button.classList.add('CTvDXd', 'QAAyWd', 'Pjpac', 'zcMYd');
        this.button.innerHTML = this.html;
    }

    create(callback?: Function): void {
        this.container = UIButton.createButtonContainer(
            this.id + '-button-container',
        );

        this.element.appendChild(this.button);
        this.container.appendChild(this.element);

        if (callback) callback();
    }

    static createButtonContainer(id: string) {
        const existing = document.getElementById(id);
        if (existing) {
            return existing;
        }

        const wrapper = document.querySelector('.TZ0BN');
        const container = document.createElement('div');
        container.classList.add('ZgUMo', 'stadiaplus_ui-btn-container');
        wrapper.appendChild(container);
        container.innerHTML = `
            <div class="E0Zk9b"></div>
        `;

        return container.querySelector('.E0Zk9b');
    }
}
