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
import { ForceCodec, Codec } from './ForceCodec';

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
     * The component tag, used in language files.
     */
    tag: string = 'force-resolution';

    /**
     * The current resolution.
     */
    resolution: number = Resolution.AUTOMATIC;

    /**
     * The resolution Select box.
     */
    select: Select;

    /**
     * The Stadia+ UI Tab
     */
    tab: UITab;

    /**
     * The global Snackbar
     */
    snackbar: Snackbar;

    constructor(tab: UITab, snackbar: Snackbar) {
        super();

        this.tab = tab;
        this.snackbar = snackbar;
        
        this.getStorage();
        window.addEventListener('DOMContentLoaded', () => ForceResolution.setResolution(this.resolution));
    }

    /**
     * Updates the current variable states with information from the chrome storage.
     *
     * @param {(() => any)} [callback=(() => {})] callback called after storage update.
     * @memberof ForceResolution
     */
    getStorage(callback: (() => any) = (() => {})) {
        LocalStorage.RESOLUTION.get((result: any) => {
            this.resolution = result.resolution;
            callback();
        })
    }

    /**
     * Updates the chrome storage with information from the current variable states.
     *
     * @param {(() => any)} [callback=(() => {})] callback called after storage update.
     * @memberof ForceResolution
     */
    setStorage(callback: (() => any) = (() => {})) {
        LocalStorage.RESOLUTION.set(this.resolution, callback);
    }

    /**
     * Called on startup, initializes important variables.
     */
    onStart(): void {
        this.active = true;
        
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
                                <option value="${Resolution.WQHD}">${Language.get('1440p')}</option>
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
                        self.select = new Select(row.element.querySelector('select'), { placeholder: Resolution.AUTOMATIC });

                        const button = row.element.querySelector('.stadiaplus_button-small');
                        button.addEventListener('click', () => {
                            self.resolution = parseInt(self.select.get()[0]);

                            if(self.resolution === Resolution.UHD_4K) {
                                ForceCodec.setCodec(Codec.VP9);
                            }

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
                        self.select = new Select(row.element.querySelector('select'), { placeholder: Resolution.AUTOMATIC });
                        self.select.set(self.resolution);
                    },
                }
            ),
        );
        
        Logger.component(Language.get('component.enabled', { name: this.name }));
    }

    /**
     * Sets the user [[Resolution]]
     *
     * @static
     * @param {number} resolution the user Resolution
     * @memberof ForceResolution
     */
    static setResolution(resolution: number): void {
        const script = document.createElement('script');

        let height;
        let width;
        switch (resolution) {
            case Resolution.UHD_4K:
                width = 3840;
                height = 2160;
                break;

            case Resolution.WQHD:
                width = 2560;
                height = 1440;
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
        this.active = false;
        Logger.component(Language.get('component.disabled', { name: this.name }));
    }

    /**
     * Called every second, updates the element to match the clock.
     */
    onUpdate() {
    }
}

/**
 * The different kinds of resolutions, represented as numbers.
 *
 * @export the Resolution type
 * @class Resolution
 */
export class Resolution {
    /**
     * Automatic, let Stadia handle resolutions.
     */
    static AUTOMATIC = 0;

    /**
     * 4K, or 3840x2160
     */
    static UHD_4K = 1;

    /**
     * WQHD, or 2560x1440
     */
    static WQHD = 2;

    /**
     * Full HD, or 1920x1080
     */
    static FHD = 3;
}
