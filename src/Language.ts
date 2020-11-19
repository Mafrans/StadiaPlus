/* eslint-disable camelcase */
import Logger from './Logger';
import { SyncStorage } from './Storage';
import lang_enUS_data from './lang/en-US.json';
import lang_svSE_data from './lang/sv-SE.json';
import lang_frFR_data from './lang/fr-FR.json';
import lang_itIT_data from './lang/it-IT.json';
import lang_esES_data from './lang/es-ES.json';
import lang_deDE_data from './lang/de-DE.json';
import lang_ukUA_data from './lang/uk-UA.json';
// import lang_enSTEEF_data from './lang/en-STEEF.json';
import lang_euES_data from './lang/eu-ES.json';
import lang_glES_data from './lang/gl-ES.json';
import lang_ruRU_data from './lang/ru-RU.json';
import lang_nlBE_data from './lang/nl-BE.json';
import lang_ptBR_data from './lang/pt-BR.json';

export class Language {
    tag: string;
    name: string;
    data: { [key: string]: unknown } = {};

    constructor(name: string, tag: string, data: { [key: string]: unknown; }) {
        this.tag = tag;
        this.name = name;
        this.data = data;
    }

    register(): void {
        Language.languages.push(this);
    }

    get(name: string, vars?: { [key: string]: unknown }): string {
        const keys = name.split(/\./g);
        let val: unknown = this.data;
        keys.forEach((key) => {
            val = (val as { [key: string]: unknown })[key] as ({ [key: string]: unknown } | string);
        });

        if (vars !== undefined) {
            Object.keys(vars).forEach((variable) => {
                val = (val as string).split(`{{${variable}}}`).join(vars[variable] as string);
            });
        }

        return val as string;
    }

    setDefault(): void {
        Language.default = this;
    }

    static languages: Language[] = [];
    static default: Language;
    static current: Language;
    static async load(): Promise<void> {
        // Check for the first language that isn't equal to the default
        let language = await SyncStorage.LANGUAGE.get();

        if (language === undefined || language === 'automatic') {
            language = this.automatic();
        }

        Logger.info(Language.get('lang-config', { language }));
        this.languages.forEach((lang) => {
            if (lang.tag === language) {
                this.current = lang;
            }
        });
    }

    static set(language: Language): void {
        this.current = language;
    }

    static automatic(): string | undefined {
        return window.navigator.languages.find(
            (l: string) => l.length >= 5
                && (this.default === undefined || l !== this.default.tag),
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

        // const lang_enSTEEF = new Language('English (Steef)', 'en-STEEF', lang_enSTEEF_data);
        // lang_enSTEEF.register();

        const lang_frFR = new Language('Français (FR)', 'fr-FR', lang_frFR_data);
        lang_frFR.register();

        const lang_itIT = new Language('Italiano (IT)', 'it-IT', lang_itIT_data);
        lang_itIT.register();

        const lang_svSE = new Language('Svenska (SE)', 'sv-SE', lang_svSE_data);
        lang_svSE.register();

        const lang_ukUA = new Language('Українська (UA)', 'uk-UA', lang_ukUA_data);
        lang_ukUA.register();

        const lang_euES = new Language('Euskara (EU)', 'eu-ES', lang_euES_data);
        lang_euES.register();

        const lang_glES = new Language('Galego (GL)', 'gl-ES', lang_glES_data);
        lang_glES.register();

        const lang_ruRU = new Language('русский (RU)', 'ru-RU', lang_ruRU_data);
        lang_ruRU.register();

        const lang_nlBE = new Language('Nederlands (BE)', 'nl-BE', lang_nlBE_data);
        lang_nlBE.register();

        const lang_ptBR = new Language('Português (BR)', 'pt-BR', lang_ptBR_data);
        lang_ptBR.register();
    }

    static get(name: string, vars?: { [key: string]: never }): string {
        if (this.current === undefined) {
            this.current = this.default;
        }
        const val = this.current.get(name, vars);

        return val;
    }
}
