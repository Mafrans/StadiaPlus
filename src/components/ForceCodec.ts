import { Component } from '../Component';
import Logger from '../Logger';
import Util from '../Util';
import './styles/ForceCodec.scss';
import { UITab } from './UITab';
import { UIRow } from '../ui/UIRow';
import { Select } from '../ui/Select';
import { Snackbar } from '../ui/Snackbar';
import { Language } from '../Language';

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
    name: string = Language.get('forcecodec.name');
    codec: number = Codec.AUTOMATIC;
    select: Select;
    tab: UITab;
    snackbar: Snackbar;

    constructor(tab: UITab, snackbar: Snackbar) {
        super();

        this.tab = tab;
        this.snackbar = snackbar;
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
                                <option value="${Codec.AUTOMATIC}">${Language.get('automatic')}</option>
                                <option value="${Codec.VP9}">${Language.get('vp9')}</option>
                                <option value="${Codec.H264}">${Language.get('h264')}</option>
                            </select>
                        </div>
                        <a class="stadiaplus_button-small">${Language.get('apply')}</a>
                    </div>
                `,
                this.id + '-row',
                {
                    onCreate: (row:UIRow) => {
                        self.select = new Select(row.element.querySelector('select'), Codec.AUTOMATIC);
    
                        const button = row.element.querySelector('.stadiaplus_button-small');
                        button.addEventListener('click', () => {
                            self.codec = parseInt(self.select.get()[0]);
    
                            self.setStorage(() => {
                                self.snackbar.activate('Reload the page to see your changes.');
                            });
                        });
    
                        self.getStorage(() => {
                            this.select.set(self.codec);
                            ForceCodec.setCodec(self.codec);
                        });            
                    },

                    onReload: (row:UIRow) => {
                        self.select.destroy();
                        self.select = new Select(row.element.querySelector('select'), Codec.AUTOMATIC);
                        self.select.set(self.codec);
                    },
                }
            ),
        );
        
        Logger.component(Language.get("component.enabled", { name: this.name }));
    }

    static setCodec(codec: number) {
        const script = document.createElement('script');
        switch (codec) {
        case Codec.VP9:
            script.innerHTML = `
                localStorage.setItem("video_codec_implementation_by_codec_key", '{"vp9":"ExternalDecoder"}');
            `;
            break;

        case Codec.H264:
            script.innerHTML = `
                localStorage.setItem("video_codec_implementation_by_codec_key", '{"h264":"ExternalDecoder", "vp9":"libvpx"}');
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

export class Codec {
    static AUTOMATIC = 0;
    static VP9 = 1;
    static H264 = 2;
}
