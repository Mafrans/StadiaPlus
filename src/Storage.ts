import { AppdataManifest } from './models/AppdataManifest';

export class LocalStorage {
    static CODEC = new LocalStorage('Codec', 'codec');
    static RESOLUTION = new LocalStorage('Resolution', 'resolution');
    static MONITOR_STATS = new LocalStorage('Monitor Stats', 'monitor-stats');
    static CACHE_VERSION = new LocalStorage('Cache Version', 'cache-version');
    static AUTH_TOKEN = new LocalStorage('Authentication Token', 'auth-token');

    name: string;
    tag: string;

    constructor(name: string, tag: string) {
        this.name = name;
        this.tag = tag;
    }

    get(): Promise<unknown> {
        return new Promise((resolve) => {
            chrome.storage.local.get(
                [this.tag],
                (result: { [tag: string]: unknown }) => resolve(result[this.tag]),
            );
        });
    }

    set(value: unknown): Promise<void> {
        return new Promise((resolve) => {
            chrome.storage.local.set({ [this.tag]: value }, resolve);
        });
    }

    static get(storages: LocalStorage[]): Promise<unknown> {
        return new Promise((resolve) => {
            chrome.storage.local.get(storages.map((e) => e.tag), resolve);
        });
    }

    static set(storages: { [key: string]: unknown }): Promise<void> {
        return new Promise((resolve) => {
            chrome.storage.local.set(storages, resolve);
        });
    }

    static clear(): void {
        chrome.storage.local.clear();
    }
}

export class SyncStorage {
    static LIBRARY_GAMES = new SyncStorage('Library Games', 'games');
    static LIBRARY_SORT_ORDER = new SyncStorage('Sort Order', 'sort-order');
    static LIBRARY_SORT_DIRECTION = new SyncStorage('Sort Direction', 'sort-direction');
    static LANGUAGE = new SyncStorage('Language', 'language');
    static COMPONENTS = new SyncStorage('Components', 'components');

    name: string;
    tag: string;

    constructor(name: string, tag: string) {
        this.name = name;
        this.tag = tag;
    }

    get(): Promise<unknown> {
        return new Promise((resolve) => {
            chrome.storage.sync.get(
                [this.tag],
                (result: { [tag: string]: unknown }) => resolve(result[this.tag]),
            );
        });
    }

    set(value: unknown): Promise<void> {
        return new Promise((resolve) => {
            chrome.storage.sync.set({ [this.tag]: value }, resolve);
        });
    }

    static get(storages: LocalStorage[]): Promise<unknown> {
        return new Promise((resolve) => {
            chrome.storage.sync.get(storages.map((e) => e.tag), resolve);
        });
    }

    static set(storages: { [key: string]: unknown }): Promise<void> {
        return new Promise((resolve) => {
            chrome.storage.sync.set(storages, resolve);
        });
    }

    static clear(): void {
        chrome.storage.sync.clear();
    }
}

export class StorageManager {
    appdata: AppdataManifest;
    constructor(appdata: AppdataManifest) {
        this.appdata = appdata;
    }

    async checkCacheVersion(): Promise<void> {
        const cacheVersion = await LocalStorage.CACHE_VERSION.get() as number;

        if (cacheVersion === undefined || this.appdata['cache-version'] > cacheVersion) {
            this.appdata['clear-keys'].local.forEach((key: string) => {
                void LocalStorage.set({ [key]: null });
            });

            this.appdata['clear-keys'].sync.forEach((key: string) => {
                void SyncStorage.set({ [key]: null });
            });
        }

        void LocalStorage.CACHE_VERSION.set(this.appdata['cache-version']);
    }
}
