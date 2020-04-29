const { chrome } = window as any;

export class LocalStorage {
    static CODEC = new LocalStorage('Codec', 'codec');
    static RESOLUTION = new LocalStorage('Resolution', 'resolution');
    static MONITOR_STATS = new LocalStorage('Monitor Stats', 'monitor-stats');

    name: string;
    tag: string;
    
    constructor(name: string, tag: string) {
        this.name = name;
        this.tag = tag;
    }

    get(callback: ((result: any) => any) = (() => {})) {
        chrome.storage.local.get([ this.tag ], callback);
    }

    set(value: any, callback: (() => any) = (() => {})) {
        chrome.storage.local.set({ [this.tag]: value }, callback);
    }

    static get(storages: LocalStorage[], callback: ((result: any) => any) = (() => {})) {
        chrome.storage.local.get(storages.map(e => e.tag), callback);
    }

    static set(storages: {[key: string]: any}, callback: (() => any) = (() => {})) {
        chrome.storage.local.get(storages, callback);
    }

    static clear() {
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

    get(callback: ((result: any) => any) = (() => {})) {
        chrome.storage.sync.get([ this.tag ], callback);
    }

    set(value: any, callback: (() => any) = (() => {})) {
        chrome.storage.sync.set({ [this.tag]: value }, callback);
    }

    static get(storages: SyncStorage[], callback: ((result: any) => any) = (() => {})) {
        chrome.storage.sync.get(storages.map(e => e.tag), callback);
    }

    static set(storages: {[key: string]: any}, callback: (() => any) = (() => {})) {
        chrome.storage.sync.set(storages, callback);
    }
    
    static clear() {
        chrome.storage.local.clear();
    }
}