export class Language {
    name: string;
    data: LanguageData = {};
    
    constructor(name: string, data: string) {
        this.data = JSON.parse(data);
    }

    register(): void {
        Language.languages.push(this);
    }

    get(name: string): string {
        return this.data[name];
    }

    setDefault() {
        Language.default = this;
    }

    static languages: Language[] = [];
    static default: Language;
    static current: Language;
    static init(): void {
        this.current = this.default;
        this.languages.forEach((lang) => {
            if(lang.name === window.navigator.language) {
                this.current = lang;
            }
        });
    }

    static get(name: string): string {
        return this.current.data[name];
    }
}

interface LanguageData {
    [key: string]: string;
}