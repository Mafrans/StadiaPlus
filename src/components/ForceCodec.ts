import { Component } from '../Component';
import Logger from '../Logger';
import Util from '../Util';
import './styles/ForceCodec.scss';
import { UITab } from './UITab';
import { UIRow } from '../ui/UIRow';
import { Select } from '../ui/Select';
import { Snackbar } from '../ui/Snackbar';
import { Language } from '../Language';
import { LocalStorage } from '../Storage';
import { Resolution } from './ForceResolution';
import { Browser } from '../Browser';

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
     * The component tag, used in language files.
     */
    tag: string = 'force-codec';

    /**
     * The current codec.
     */
    codec: number = Codec.AUTOMATIC;

    /** 
     * The codec Select box.
     */
    select: Select;

    /** 
     * The Stadia+ UI Tab.
     */
    tab: UITab;

    /**
     * The global snackbar.
     */
    snackbar: Snackbar;

    constructor(tab: UITab, snackbar: Snackbar) {
        super();

        this.tab = tab;
        this.snackbar = snackbar;
    }

    /**
     * Updates the current variable states with information from the chrome storage.
     *
     * @param {(() => any)} [callback=(() => {})] callback called after storage update.
     * @memberof ForceCodec
     */
    getStorage(callback: (() => any) = (() => {})) {
        LocalStorage.CODEC.get((result: any) => {
            this.codec = result.codec;
            callback();
        });
    }

    /**
     * Updates the chrome storage with information from the current variable states.
     *
     * @param {(() => any)} [callback=(() => {})] callback called after storage update.
     * @memberof ForceCodec
     */
    setStorage(callback: (() => any) = (() => {})) {
        LocalStorage.CODEC.set(this.codec, callback);
    }

    /**
     * Called on startup, initializes important variables.
     * 
     * @memberof ForceCodec
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
                this.id + '-row',
                {
                    onCreate: (row:UIRow) => {
                        self.select = new Select(row.element.querySelector('select'), { placeholder: Codec.AUTOMATIC });
    
                        const button = row.element.querySelector('.stadiaplus_button-small');
                        button.addEventListener('click', () => {
                            self.codec = parseInt(self.select.get()[0]);
    
                            self.setStorage(() => {
                                self.snackbar.activate(Language.get('snackbar.reload-to-update'));
                            });
                        });
    
                        self.getStorage(() => {
                            LocalStorage.RESOLUTION.get(result => {
                                self.select.enable();
                                
                                if(result.resolution === Resolution.UHD_4K) {
                                    self.codec = Codec.VP9;
                                    self.select.disable();

                                    const tooltip = document.getElementById(this.id + '-4k-tooltip') as HTMLElement; 
                                    tooltip.style.display = 'block';
                                }

                                self.select.set(self.codec);
                                ForceCodec.setCodec(self.codec);
                            })
                        });            
                    },

                    onReload: (row:UIRow) => {
                        self.select.destroy();
                        self.select = new Select(row.element.querySelector('select'), { placeholder: Codec.AUTOMATIC });
                        self.select.set(self.codec);
                    },
                }
            ),
        );
        
        Logger.component(Language.get("component.enabled", { name: this.name }));
    }

    /**
     * Sets the used Codec
     *
     * @static
     * @param {number} codec
     * @memberof ForceCodec
     */
    static setCodec(codec: number) {
        const script = document.createElement('script');
        const vp9data = '{"vp9":"ExternalDecoder"}'; // Browser.getVersion() >= 84414402 ? '{"vp9": "libvpx"}' : '{"vp9":"ExternalDecoder"}';
        const h264data = '{"h264":"ExternalDecoder", "vp9":"libvpx"}'; // Browser.getVersion() >= 84414402 ? '{"vp9":"libvpx","h264":"FFmpeg"}' : '{"h264":"ExternalDecoder", "vp9":"libvpx"}';

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

    /**
     * Called every second, updates the element to match the clock.
     * 
     * @memberof ForceCodec
     */
    onUpdate() {
    }
}

/**
 * The different kinds of codecs, represented as numbers.
 *
 * @export the Codec type
 * @class Codec
 */
export class Codec {
    /**
     * Automatic codec, let Stadia decide on it's own.
     */
    static AUTOMATIC = 0;

    /**
     * VP9 codec, usually works better than H264 but at the cost of lower quality.
     */
    static VP9 = 1;

    /**
     * H264 codec, high quality and Mac-OS compatible codec but with latency issues. 
     */
    static H264 = 2;
}
