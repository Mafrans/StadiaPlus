import { Component } from '../Component';
import Logger from '../Logger';
import Util from '../Util';
import './styles/ForceResolution.scss';
import { UITab } from './UITab';
import { UIRow, UIRowOptions } from '../ui/UIRow';
import { Select } from '../ui/Select';
import { Snackbar } from '../ui/Snackbar';

const chrome = (window as any).chrome;

/**
 * A dropdown allowing changing of the resolution.
 *
 * @export the ForceResolution type.
 * @class ForceResolution
 * @extends {Component}
 */
export class ForceResolution extends Component {
    /**
     * The name of the Component.
     */
    name: string = 'Force Resolution';
    resolution: number = Resolution.AUTOMATIC;
    select: Select;
    tab: UITab;
    snackbar: Snackbar;

    constructor(tab: UITab, snackbar: Snackbar) {
        super();

        this.tab = tab;
        this.snackbar = snackbar;
    }

    getStorage(callback?: Function) {
        chrome.storage.local.get(['resolution'], (result: any) => {
            this.resolution = result.resolution;

            if(callback) 
                callback();
        });
    }

    setStorage(callback?: Function) {
        const self = this;
        chrome.storage.local.set({ resolution: self.resolution }, callback);
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
                            <select name="resolution">
                                <option value="${Resolution.AUTOMATIC}">Automatic</option>
                                <option value="${Resolution.UHD_4K}">4K</option>
                                <option value="${Resolution.FHD}">1080p</option>
                            </select>
                        </div>
                        <a class="stadiaplus_button-small">Apply</a>
                    </div>

                    <p class="stadiaplus_muted">Note: the set value is the maximum resolution Stadia will attempt to achieve. If your computer is not capable of rendering the resolution or it is not available with the current data usage option, it will not be displayed.</p>
                `,
                this.id + '-row',
                {
                    onCreate: (row:UIRow) => {
                        self.select = new Select(row.element.querySelector('select'), Resolution.AUTOMATIC);

                        const button = row.element.querySelector('.stadiaplus_button-small');
                        button.addEventListener('click', () => {
                            self.resolution = parseInt(self.select.get()[0]);

                            self.setStorage(() => {
                                self.snackbar.activate('Reload the page to see your changes.');
                            });
                        });

                        self.getStorage(() => {
                            this.select.set(self.resolution);
                        });            
                    },

                    onReload: (row:UIRow) => {
                        self.select.destroy();
                        self.select = new Select(row.element.querySelector('select'), Resolution.AUTOMATIC);
                        self.select.set(self.resolution);
                    },
                }
            ),
        );
        self.getStorage(() => {
            ForceResolution.setResolution(self.resolution);
        });
        
        Logger.component('Component', this.name, 'has been enabled');
    }

    static setResolution(codec: number) {
        const script = document.createElement('script');

        let height;
        let width;
        switch (codec) {
            case Resolution.UHD_4K:
                width = 3840;
                height = 2160;
                break;
            
            case Resolution.FHD:
                width = 1920;
                height = 1080;
                break;
                
            case Resolution.AUTOMATIC:
                return;

            default:
                return;
        }

        script.innerHTML = `
            Object.defineProperty(window.screen, 'availWidth', { value: ${width} });
            Object.defineProperty(window.screen, 'availHeight', { value: ${height} });
            Object.defineProperty(window.screen, 'width', { value: ${width} });
            Object.defineProperty(window.screen, 'height', { value: ${height} });
        `;

        document.body.appendChild(script);
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

export class Resolution {
    static AUTOMATIC = 0;
    static UHD_4K = 1;
    static FHD = 2;
}
