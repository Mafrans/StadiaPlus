export class Language {
    name: string;
    data: {[key: string]: any} = {};
    
    constructor(name: string, data: any) {
        this.data = data;
    }

    register(): void {
        Language.languages.push(this);
    }

    get(name: string, vars?: {[key: string]: any}): string {
        let keys = name.split('.');
        let val = this.data;
        for(const key of keys) {
            val = val[key];
        }

        if(vars !== undefined) {
            for(const _var in vars) {
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
    static init(): void {
        this.current = this.default;
        this.languages.forEach((lang) => {
            if(lang.name === window.navigator.language) {
                this.current = lang;
            }
        });
    }

    static get(name: string, vars?: {[key: string]: any}): string {
        let val = this.current.get(name, vars);

        return val;
    }
}