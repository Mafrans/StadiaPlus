import { Component } from '../Component';
import Logger from '../Logger';
import Util from '../Util';
import './styles/ForceCodec.scss';
import { UITab } from './UITab';
import { UIRow } from '../ui/UIRow';
import { Select } from '../ui/Select';

const chrome = (window as any).chrome;

/**
 * A dropdown allowing changing of the codec.
 *
 * @export the ForceCodec type.
 * @class ForceCodec
 * @extends {Component}
 */
export class ForceCodec extends Component {
    /**
     * The name of the Component.
     */
    name: string = 'Force Codec';
    codec: number = Codec.AUTOMATIC;
    select: Select;
    tab: UITab;

    constructor(tab: UITab) {
        super();

        this.tab = tab;
    }

    getStorage(callback?: Function) {
        chrome.storage.local.get(['codec'], (result: any) => {
            this.codec = result.codec;

            if(callback) 
                callback();
        });
    }

    setStorage(callback?: Function) {
        const self = this;
        chrome.storage.local.set({ codec: self.codec }, callback);
    }

    /**
     * Called on startup, initializes important variables.
     */
    onStart(): void {
        this.enabled = true;

        const self = this;
        this.tab.addRow(
            new UIRow(
                this.name,
                `
                    <div class='stadiaplus_row'>
                        <div class='stadiaplus_select'>
                            <select name="codec">
                                <option value="${Codec.AUTOMATIC}">Automatic</option>
                                <option value="${Codec.VP9}">VP9</option>
                                <option value="${Codec.H264}">H264</option>
                            </select>
                        </div>
                        <a class="stadiaplus_button-small">Apply</a>
                    </div>

                    <p class="stadiaplus_muted">Note: changing the codec will reload the page.</p>
                `,
                this.id + '-row',
                (element:Element) => {
                    self.select = new Select(element.querySelector('select'));

                    const button = element.querySelector('.stadiaplus_button-small');
                    button.addEventListener('click', () => {
                        self.codec = parseInt(self.select.get()[0]);

                        this.setStorage(() => {
                            location.reload();
                        });
                    });

                    this.getStorage(() => {
                        this.select.set(this.codec);
                    });            
                },
            ),
        );
        
        Logger.component('Component', this.name, 'has been enabled');
    }

    /**
     * Called on stop, makes sure to dispose of elements and variables.
     */
    onStop(): void {
        this.enabled = false;
        Logger.component('Component', this.name, 'has been disabled');
    }

    /**
     * Called every second, updates the element to match the clock.
     */
    onUpdate() {
    }
}

export class Codec {
    static AUTOMATIC = 0;
    static VP9 = 1;
    static H264 = 2;
}
