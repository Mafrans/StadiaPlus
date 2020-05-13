export class Browser {
    private static version: number;
    static init() {
        const version = (navigator.appVersion.split(' ') as any).find((e: string) => e.indexOf('Chrome') != -1).split('/')[1].split('.');

        let accumulator = 0;
        for(let i = 0; i < version.length; i++) {
            console.log(version[i] * Math.pow(10, (version.length - i - 1) * 2));
            accumulator += version[i] * Math.pow(10, (version.length - i - 1) * 2);
        }

        console.log(accumulator);
        this.version = accumulator;
    }

    static getVersion() {
        return this.version;
    }
}