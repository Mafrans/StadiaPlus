import { Component } from '../Component';
import Logger from '../Logger';
import './styles/ForceCodec.scss';
import { UITab } from './UITab';
import { UIRow } from '../ui/UIRow';
import { Select } from '../ui/Select';
import { Snackbar } from '../ui/Snackbar';
import { Language } from '../Language';
import { LocalStorage } from '../Storage';
import { Resolution } from '../models/Resolution';
import { Codec } from '../models/Codec';

/**
 * A dropdown allowing changing of the codec.
 *
 * @export the ForceCodec type.
 * @class ForceCodec
 * @extends {Component}
 */
export class ForceCodec extends Component {
    /**
     * The component tag, used in language files.
     */
    tag = 'force-codec';

    /**
     * The current codec.
     */
    codec: Codec = Codec.AUTOMATIC;

    /**
     * The codec Select box.
     */
    select?: Select;

    /**
     * The Stadia+ UI Tab.
     */
    tab: UITab;

    constructor(tab: UITab) {
        super();

        this.tab = tab;
    }

    /**
     * Updates the current variable states with information from the chrome storage.
     *
     * @param {(() => any)} [callback=(() => {})] callback called after storage update.
     * @memberof ForceCodec
     */
    async getStorage(): Promise<void> {
        this.codec = await LocalStorage.CODEC.get() as Codec;
    }

    /**
     * Updates the chrome storage with information from the current variable states.
     *
     * @param {(() => any)} [callback=(() => {})] callback called after storage update.
     * @memberof ForceCodec
     */
    async setStorage(): Promise<void> {
        await LocalStorage.CODEC.set(this.codec);
    }

    /**
     * Called on startup, initializes important variables.
     *
     * @memberof ForceCodec
     */
    onStart(): void {
        this.active = true;

        this.tab.addRow(
            new UIRow(
                this.name,
                `
                    <div class='stadiaplus_row'>
                        <div class='stadiaplus_select'>
                            <select name="codec">
                                <option value="${Codec.AUTOMATIC}">${Language.get('automatic')}</option>
                                <option value="${Codec.VP9}">${Language.get('vp9')}</option>
                                <option value="${Codec.H264}">${Language.get('h264')}</option>
                            </select>
                        </div>
                        <a class="stadiaplus_button-small">${Language.get('apply')}</a>
                    </div>
                    <p class='stadiaplus_muted' id='${this.id}-4k-tooltip' style='display: none'>${Language.get('force-codec.4k-tooltip')}</p>
                `,
                `${this.id}-row`,
                {
                    onCreate: async (row:UIRow) => {
                        this.select = new Select(row.element.querySelector('select') as HTMLSelectElement, { placeholder: Codec.AUTOMATIC.toString() });

                        const button = row.element.querySelector('.stadiaplus_button-small');
                        if (button != null) {
                            button.addEventListener('click', () => {
                                if (this.select === undefined) return;

                                this.codec = parseInt(this.select.get()[0], 10);
                                void this.setStorage().then(() => {
                                    Snackbar.activate(Language.get('snackbar.reload-to-update'));
                                });
                            });
                        }

                        await this.getStorage();
                        const resolution = await LocalStorage.RESOLUTION.get() as Resolution;

                        this.select.enable();

                        if (resolution === Resolution.UHD_4K || resolution === Resolution.WQHD) {
                            this.codec = Codec.VP9;
                            this.select.disable();

                            const tooltip = document.getElementById(`${this.id}-4k-tooltip`) as HTMLElement;
                            tooltip.style.display = 'block';
                        }

                        this.select.set(this.codec as string);
                        ForceCodec.setCodec(this.codec);
                    },

                    onReload: (row:UIRow) => {
                        if (this.select === undefined) return;

                        this.select.destroy();
                        this.select = new Select(row.element.querySelector('select') as HTMLSelectElement, { placeholder: Codec.AUTOMATIC.toString() });
                        this.select.set(this.codec as string);
                    },
                },
            ),
        );

        Logger.component(Language.get('component.enabled', { name: this.name }));
    }

    /**
     * Sets the used Codec
     *
     * @static
     * @param {number} codec
     * @memberof ForceCodec
     */
    static setCodec(codec: Codec): void {
        const script = document.createElement('script');
        const vp9data = '{"vp9-profile0":"ExternalDecoder"}'; // Browser.getVersion() >= 84414402 ? '{"vp9": "libvpx"}' : '{"vp9":"ExternalDecoder"}';
        const h264data = '{"h264":"ExternalDecoder", "vp9-profile0":"libvpx"}'; // Browser.getVersion() >= 84414402 ? '{"vp9":"libvpx","h264":"FFmpeg"}' : '{"h264":"ExternalDecoder", "vp9":"libvpx"}';

        switch (codec) {
            case Codec.VP9:
                script.innerHTML = `
                localStorage.setItem("video_codec_implementation_by_codec_key", '${vp9data}');
            `;
                break;

            case Codec.H264:
                script.innerHTML = `
                localStorage.setItem("video_codec_implementation_by_codec_key", '${h264data}');
            `;
                break;

            case Codec.AUTOMATIC:
                script.innerHTML = `
                localStorage.removeItem("video_codec_implementation_by_codec_key");
            `;
                break;

            default:
                script.innerHTML = `
                localStorage.removeItem("video_codec_implementation_by_codec_key");
            `;
                break;
        }
        document.body.appendChild(script);
    }

    /**
     * Called on stop, makes sure to dispose of elements and variables.
     *
     * @memberof ForceCodec
     */
    onStop(): void {
        this.active = false;
        Logger.component(Language.get('component.disabled', { name: this.name }));
    }
}
