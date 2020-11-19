export class Browser {
    private static version: number;
    static init(): void {
        const versionString = (navigator.appVersion.split(' ')).find((e: string) => e.indexOf('Chrome') !== -1);

        if (versionString === undefined) return;
        const version = versionString.split('/')[1].split('.').map((s) => parseInt(s, 10));

        let accumulator = 0;
        for (let i = 0; i < version.length; i += 1) {
            accumulator += version[i] * (10 ** ((version.length - i - 1) * 2));
        }

        this.version = accumulator;
    }

    static getVersion(): number {
        return this.version;
    }
}
