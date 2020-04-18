import Logger from './Logger';
import { SyncStorage } from './Storage';
import lang_enUS_data from './lang/en-US.json';
import lang_svSE_data from './lang/sv-SE.json';
import lang_frFR_data from './lang/fr-FR.json';
import lang_itIT_data from './lang/it-IT.json';
import lang_esES_data from './lang/es-ES.json';
import lang_deDE_data from './lang/de-DE.json';
import lang_enSTEEF_data from './lang/en-STEEF.json';
const { chrome } = window as any;

export class Language {
    tag: string;
    name: string;
    data: { [key: string]: any } = {};

    constructor(name: string, tag: string, data: any) {
        this.tag = tag;
        this.name = name;
        this.data = data;
    }

    register(): void {
        Language.languages.push(this);
    }

    get(name: string, vars?: { [key: string]: any }): string {
        let keys = name.split('.');
        let val = this.data;
        for (const key of keys) {
            val = val[key];
        }

        if (vars !== undefined) {
            for (const _var in vars) {
                val = val.split('{{' + _var + '}}').join(vars[_var]);
            }
        }

        return val as any;
    }

    setDefault() {
        Language.default = this;
    }

    static languages: Language[] = [];
    static default: Language;
    static current: Language;
    static load(callback: (() => any) = (() => {})): void {
        // Check for the first language that isn't equal to the default
        SyncStorage.LANGUAGE.get((result: any) => {
            let language = result[SyncStorage.LANGUAGE.tag];
            if (language === undefined || language === 'automatic') {
                language = this.automatic();
            }

            Logger.info('Using language configuration ' + language);
            this.languages.forEach((lang, index) => {
                if (lang.tag === language) {
                    this.current = lang;
                }

                if(index === this.languages.length - 1) {
                    callback();
                }
            });
        });
    }

    static automatic() {
        return (window.navigator.languages as any).find(
            (l: string) =>
                l.length >= 5 &&
                (this.default === undefined || l !== this.default.tag)
        );
    }

    static init(): void {
        const lang_deDE = new Language('Deutsche (DE)', 'de-DE', lang_deDE_data);
        lang_deDE.register();

        const lang_esES = new Language('Español (ES)', 'es-ES', lang_esES_data);
        lang_esES.register();

        const lang_enUS = new Language('English (US)', 'en-US', lang_enUS_data);
        lang_enUS.register();
        lang_enUS.setDefault();

        const lang_enSTEEF = new Language('English (Steef)', 'en-STEEF', lang_enSTEEF_data);
        lang_enSTEEF.register();

        const lang_frFR = new Language('Français (FR)', 'fr-FR', lang_frFR_data);
        lang_frFR.register();

        const lang_itIT = new Language('Italiano (IT)', 'it-IT', lang_itIT_data);
        lang_itIT.register();

        const lang_svSE = new Language('Svenska (SE)', 'sv-SE', lang_svSE_data);
        lang_svSE.register();
    }

    static get(name: string, vars?: { [key: string]: any }): string {
        if (this.current === undefined) {
            this.current = this.default;
        }
        let val = this.current.get(name, vars);

        return val;
    }
}
