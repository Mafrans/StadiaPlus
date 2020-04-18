import { Component } from '../Component';
import Logger from '../Logger';
import Util from '../Util';
import './styles/ForceResolution.scss';
import { UITab } from './UITab';
import { UIRow, UIRowOptions } from '../ui/UIRow';
import { Select } from '../ui/Select';
import { Snackbar } from '../ui/Snackbar';
import { Language } from '../Language';
import { LocalStorage } from '../Storage';

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
    name: string = Language.get('force-resolution.name');
    resolution: number = Resolution.AUTOMATIC;
    select: Select;
    tab: UITab;
    snackbar: Snackbar;

    constructor(tab: UITab, snackbar: Snackbar) {
        super();

        this.tab = tab;
        this.snackbar = snackbar;
        
        this.getStorage();
    }

    getStorage(callback: (() => any) = (() => {})) {
        LocalStorage.RESOLUTION.get((result: any) => {
            this.resolution = result.resolution;
            callback();
        })
    }

    setStorage(callback: (() => any) = (() => {})) {
        LocalStorage.RESOLUTION.set(this.resolution, callback);
    }

    /**
     * Called on startup, initializes important variables.
     */
    onStart(): void {
        this.enabled = true;

        ForceResolution.setResolution(this.resolution);
        
        const self = this;
        this.tab.addRow(
            new UIRow(
                this.name,
                `
                    <div class='stadiaplus_row'>
                        <div class='stadiaplus_select'>
                            <select name="resolution">
                                <option value="${Resolution.AUTOMATIC}">${Language.get('automatic')}</option>
                                <option value="${Resolution.UHD_4K}">${Language.get('4k')}</option>
                                <option value="${Resolution.FHD}">${Language.get('1080p')}</option>
                            </select>
                        </div>
                        <a class="stadiaplus_button-small">${Language.get('apply')}</a>
                    </div>

                    <p class="stadiaplus_muted">${Language.get('force-resolution.note')}</p>
                `,
                this.id + '-row',
                {
                    onCreate: (row:UIRow) => {
                        self.select = new Select(row.element.querySelector('select'), Resolution.AUTOMATIC);

                        const button = row.element.querySelector('.stadiaplus_button-small');
                        button.addEventListener('click', () => {
                            self.resolution = parseInt(self.select.get()[0]);

                            self.setStorage(() => {
                                self.snackbar.activate(Language.get('snackbar.reload-to-update'));
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
        
        Logger.component(Language.get('component.enabled', { name: this.name }));
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
        Logger.component(Language.get('component.disabled', { name: this.name }));
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
