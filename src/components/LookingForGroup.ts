import { Component } from '../Component';
import Logger from '../Logger';
import Util from '../Util';
import { UIButton } from '../ui/UIButton';
import { UIComponent } from '../ui/UIComponent';
import './styles/LookingForGroup.scss';
import { Language } from '../Language';
import axios from 'axios';
import { LocalStorage } from '../Storage';
import 'slim-select/dist/slimselect.min.css';
import '../ui/styles/Select.scss';
import { StadiaPlusDB } from '../StadiaPlusDB';

const { chrome, RTCPeerConnection } = (window as any);

/**
 * A network monitor allowing users to see their network statistics while playing a game.
 *
 * @export the NetworkMonitor type.
 * @class NetworkMonitor
 * @extends {Component}
 */
export class LookingForGroup extends Component {
    /**
     * The component tag, used in language files.
     */
    tag: string = 'looking-for-group';

    /**
     * The tab element.
     */
    tabElement: HTMLElement;

    /**
     * The monitor element.
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
     * Whether the component is active or not.
     */
    active: boolean = false;

    /**
     * Whether the monitor is open or not.
     */
    lookingForGroup: boolean = false;

    gameUUID: string = "";

    constructor() {
        super();
    }

    /**
     * Visible network statistics.
     */
    visible: any = [];

    /**
     * Creates a [[UIComponent]] and a [[UIButton]].
     * 
     * @memberof NetworkMonitor
     */
    createUI() {
        let html = `
        <div class='CTvDXd QAAyWd Fjy05d ivWUhc QSDHyc rpgZzc RkyH1e stadiaplus_button stadiaplus_lookingforgroup-toggle-button' id='${this.id}-togglebutton'>${Language.get('looking-for-group.toggle-button.start')}</div>
        
        <div id='${this.id}-groups' class='stadiaplus_lookingforgroup-groups'>
            <h6>Groups</h6>
            <span id='${this.id}-refresh' class='material-icons-extended refresh'>refresh</span>

            <div id='${this.id}-group-list' class='group-list'></div>
        </div>
        `;

        if(!StadiaPlusDB.isAuthenticated()) {
            html = `
                <h6>Not authenticated</h6>
                <p>Seems like you've found a Stadia+ DB feature, this is not available at the moment since you aren't logged in. Sign in in the Stadia+ popup to access it.</p>
            `
        }

        this.component = new UIComponent(
            Language.get('looking-for-group.name'),
            html,
            this.id,
        );
        this.component.element.classList.add('stadiaplus_lookingforgroup-tab');

        const icon = chrome.runtime.getURL('images/icons/network-monitor.svg');
        this.button = new UIButton(icon, 'LFG', this.id + '-button');
    }
    
    /**
     * Updates the current variable states with information from the chrome storage.
     *
     * @param {(() => any)} [callback=(() => {})] callback called after storage update.
     * @memberof NetworkMonitor
     */
    getStorage(callback: (() => any) = (() => {})) {
        /*LocalStorage.MONITOR_STATS.get((result: any) => {
            if(result[LocalStorage.MONITOR_STATS.tag]) {
                this.visible = result[LocalStorage.MONITOR_STATS.tag];
            }
        })*/
        callback();
    }

    /**
     * Updates the chrome storage with information from the current variable states.
     *
     * @param {(() => any)} [callback=(() => {})] callback called after storage update.
     * @memberof NetworkMonitor
     */
    setStorage(callback: (() => any) = (() => {})) {
        callback(); //LocalStorage.MONITOR_STATS.set(this.visible, callback);
    }

    /**
     * Called on startup, initializes important variables.
     * 
     * @memberof NetworkMonitor
     */
    onStart(): void {
        this.active = true;
        this.createUI();
        
        Logger.component(Language.get('component.enabled', { name: this.name }));
    
    }

    /**
     * Called on stop, makes sure to dispose of elements and variables.
     * 
     * @memberof NetworkMonitor
     */
    onStop(): void {
        this.active = false;
        this.button.element.remove();
        this.button.destroy();
        this.component.element.remove();

        Logger.component(Language.get('component.disabled', { name: this.name }));
    }

    updateGroups(): void {
        StadiaPlusDB.LFGConnector.get(this.gameUUID).then(res => {
            let html = '';
            for(const user of res.data) {
                html += `
                    <div class='stadiaplus_lookingforgroup-group'>
                        <span class='email'>${user}</span>
                    </div>
                    `;
            }

            this.component.element.querySelector(`#${this.id}-group-list`).innerHTML = html;
        })
        .catch((err: any) => Logger.error(err.error));
    }

    /**
     * Called every second, makes sure to create components if they don't already exist.
     * 
     * @memberof NetworkMonitor
     */
    onUpdate() {
        // Only create components if the menu is open already.
        if (Util.isMenuOpen() && Util.isInGame()) {
            if (!this.exists()) {
                const self = this;
                this.updateRenderer();
                this.component.create();

                this.button.create(() => {
                    self.button.onPressed(() => {
                        self.component.openTab();
                    });
                });

                if(StadiaPlusDB.isAuthenticated()) {
                    this.gameUUID = location.href.split('/')[location.href.split('/').length-1];

                    const toggleButton = document.getElementById(this.id + '-togglebutton');
                    
                    toggleButton.addEventListener('click', () => {
                        this.lookingForGroup = !this.lookingForGroup;
                        this.component.element.querySelector(`#${this.id}-groups`).classList.toggle('visible', this.lookingForGroup);

                        StadiaPlusDB.LFGConnector.post(this.gameUUID).then(() => {
                            this.updateGroups();
                        })
                        .catch((err: any) => Logger.error(err.error));

                        toggleButton.innerHTML = Language.get('looking-for-group.toggle-button.' + (this.lookingForGroup ? 'stop' : 'start'))
                    });
                }
            }

            if(!this.button.container.exists()) {
                this.button.container.create();
            }
        }
        else if(this.component.open) {
            this.component.closeTab();
        }
        else if(this.exists()) {
            this.button.destroy();
            this.component.element.remove();
        }
    }
}