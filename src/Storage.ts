const { chrome } = window as any;

export class Storage {
    static Local: LocalStorage;
    static Sync: SyncStorage;
}

class LocalStorage {
    CODEC = new LocalStorage('Codec', 'codec');


    name: string;
    tag: string;
    
    constructor(name: string, tag: string) {
        this.name = name;
        this.tag = tag;
    }

    get(callback: (result: any) => any) {
        chrome.storage.local.get([ this.tag ], callback);
    }

    set(value: any, callback: () => any = () => {}) {
        chrome.storage.local.set({ [this.tag]: value }, callback);
    }

    static get(storages: LocalStorage[], callback: (result: any) => any) {
        chrome.storage.local.get(storages.map(e => e.tag), callback);
    }
}

class SyncStorage {
    name: string;
    tag: string;
    
    constructor(name: string, tag: string) {
        this.name = name;
        this.tag = tag;
    }

    get(callback: (result: any) => any) {
        chrome.storage.sync.get([ this.tag ], callback);
    }

    set(value: any, callback: () => any = () => {}) {
        chrome.storage.sync.set({ [this.tag]: value }, callback);
    }

    static get(storages: LocalStorage[], callback: (result: any) => any) {
        chrome.storage.sync.get(storages.map(e => e.tag), callback);
    }
}