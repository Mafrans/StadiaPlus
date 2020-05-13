export class Browser {
    private static version: number;
    static init() {
        const version = (navigator.appVersion.split(' ') as any).find((e: string) => e.indexOf('Chrome') != -1).split('/')[1];
        this.version = parseInt(version.replace(/\./g, ''));
    }

    static getVersion() {
        return this.version;
    }
}