import { Component } from '../Component';
import Logger from '../Logger';
import './styles/ForceResolution.scss';
import { UITab } from './UITab';
import { UIRow } from '../ui/UIRow';
import { Select } from '../ui/Select';
import { Snackbar } from '../ui/Snackbar';
import { Language } from '../Language';
import { LocalStorage } from '../Storage';
import { ForceCodec } from './ForceCodec';
import { Codec } from '../models/Codec';
import { Resolution } from '../models/Resolution';

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
    tag = 'force-resolution';

    /**
     * The current resolution.
     */
    resolution: Resolution = Resolution.AUTOMATIC;

    /**
     * The resolution Select box.
     */
    select?: Select;

    /**
     * The Stadia+ UI Tab
     */
    tab: UITab;

    constructor(tab: UITab) {
        super();

        this.tab = tab;

        void this.getStorage();
        window.addEventListener('DOMContentLoaded', () => ForceResolution.setResolution(this.resolution));
    }

    /**
     * Updates the current variable states with information from the chrome storage.
     *
     * @param {(() => any)} [callback=(() => {})] callback called after storage update.
     * @memberof ForceResolution
     */
    async getStorage(): Promise<void> {
        this.resolution = await LocalStorage.RESOLUTION.get() as Resolution;

        if (this.resolution === undefined) this.resolution = Resolution.AUTOMATIC;
    }

    /**
     * Updates the chrome storage with information from the current variable states.
     *
     * @param {(() => any)} [callback=(() => {})] callback called after storage update.
     * @memberof ForceResolution
     */
    async setStorage(): Promise<void> {
        await LocalStorage.RESOLUTION.set(this.resolution);
    }

    /**
     * Called on startup, initializes important variables.
     */
    onStart(): void {
        this.active = true;

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
                                <option value="${Resolution.HD}">${Language.get('720p')} (${Language.get('experimental')})</option>
                            </select>
                        </div>
                        <a class="stadiaplus_button-small">${Language.get('apply')}</a>
                    </div>

                    <p class="stadiaplus_muted">${Language.get('force-resolution.note')}</p>
                `,
                `${this.id}-row`,
                {
                    onCreate: (row:UIRow) => {
                        this.select = new Select(row.element.querySelector('select') as HTMLSelectElement, { placeholder: Resolution.AUTOMATIC.toString() });

                        const button = row.element.querySelector('.stadiaplus_button-small');
                        if (button != null) {
                            button.addEventListener('click', () => {
                                if (this.select === undefined) {
                                    Logger.error('Tried to set the forced resolution, but was unable to.');
                                    return;
                                }

                                this.resolution = parseInt(this.select.get()[0], 10);

                                if (this.resolution === Resolution.UHD_4K) {
                                    ForceCodec.setCodec(Codec.VP9);
                                }

                                void this.setStorage().then(() => {
                                    Snackbar.activate(Language.get('snackbar.reload-to-update'));
                                });
                            });
                        }

                        void this.getStorage().then(() => {
                            if (this.select === undefined) return;
                            this.select.select(this.resolution);
                        });
                    },

                    onReload: (row:UIRow) => {
                        if (this.select === undefined) {
                            Logger.error('Tried reload the select box, but it didn\'t exist.');
                            return;
                        }

                        this.select.destroy();
                        this.select = new Select(row.element.querySelector('select') as HTMLSelectElement, { placeholder: Resolution.AUTOMATIC.toString() });
                        this.select.select(this.resolution);
                    },
                },
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
    static setResolution(resolution: Resolution): void {
        const script = document.createElement('script');

        // Rudimentary mapping of stadia localStorage variables for performance setting
        const stadiaPerformance = {
            HD: 2, FHD: 3, WQHD: 4, UHD_4K: 4,
        };

        // Number based on performance to be injected in localStorage for Stadia settings.
        let performanceInject;

        let height;
        let width;
        switch (resolution) {
            case Resolution.UHD_4K:
                width = 3840;
                height = 2160;
                performanceInject = stadiaPerformance.UHD_4K;
                break;

            case Resolution.WQHD:
                width = 2560;
                height = 1440;
                performanceInject = stadiaPerformance.UHD_4K;
                break;

            case Resolution.FHD:
                width = 1920;
                height = 1080;
                performanceInject = stadiaPerformance.FHD;
                break;

            case Resolution.HD:
                width = 1280;
                height = 720;
                performanceInject = stadiaPerformance.HD;
                break;

            case Resolution.AUTOMATIC:
                script.innerHTML = `
                localStorage.removeItem("_bl3");
                `;
                document.body.appendChild(script);
                return;

            default:
                return;
        }

        /**
         * Create localStorage compatible value string from params with date
         * Date is included as milisecond unix timestamp in value by Stadia,
         * some values have safeguard expiration so refresh to be safe
         * */
        const performanceValue = JSON.stringify({ data: `[${performanceInject},2]`, creation: Date.now() });

        script.innerHTML = `
            Object.defineProperty(window.screen, 'availWidth', { value: ${width} });
            Object.defineProperty(window.screen, 'availHeight', { value: ${height} });
            Object.defineProperty(window.screen, 'width', { value: ${width} });
            Object.defineProperty(window.screen, 'height', { value: ${height} });
            localStorage.setItem("_bl3", '${performanceValue}');
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
}
