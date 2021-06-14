import { StadiaCodec } from './models/StadiaCodec';
import { StadiaResolution } from './models/StadiaResolution';
import Logger from '../main/src/Logger';

export enum ConfigType {
    LOCAL,
    SYNC
}

export class ConfigEntry<T> {
    private listeners: { id: number, listener: (newValue: T) => void }[] = [];

    tag: string;
    type: ConfigType;
    constructor(tag: string, type: ConfigType) {
        this.tag = tag;
        this.type = type;
    }

    async set(value: T): Promise<void> {
        switch (this.type) {
            case ConfigType.LOCAL:
                await new Promise<void>(resolve => {
                    Logger.debug(`'${JSON.stringify(value)}' → LOCAL.${this.tag}`)
                    chrome.storage.local.set(
                        { [this.tag]: value },
                        () => {
                            this.listeners.forEach(listener => listener.listener(value))
                            resolve();
                        }
                    );
                });
                return;

            case ConfigType.SYNC:
                await new Promise<void>(resolve => {
                    Logger.debug(`'${JSON.stringify(value)}' → SYNC.${this.tag}`)
                    chrome.storage.sync.set(
                        { [this.tag]: value },
                        () => {
                            this.listeners.forEach(listener => listener.listener(value))
                            resolve();
                        }
                    );
                });
                return;
        }
    }

    async get(): Promise<T | null> {
        switch (this.type) {
            case ConfigType.LOCAL:
                return await new Promise<T | null>(resolve => {
                    chrome.storage.local.get(
                        value => resolve(value[this.tag] as (T | null))
                    );
                });

            case ConfigType.SYNC:
                return await new Promise<T | null>(resolve => {
                    chrome.storage.sync.get(
                        value => resolve(value[this.tag] as (T | null))
                    );
                });
        }
    }

    addChangeListener(listener: (newValue: T) => void): number {
        const id = Math.round(Math.random() * 10000);
        this.listeners.push({ id, listener });

        return id;
    }

    removeChangeListener(id: number) {
        this.listeners = this.listeners.filter(it => it.id === id);
    }
}

export class Config {
    static GAME_UPDATES = new ConfigEntry<string[]>('games-updated', ConfigType.SYNC);
    static GAME_IDS = new ConfigEntry<{uuid: string, subId: string}[]>('games', ConfigType.LOCAL);
    static CODEC = new ConfigEntry<StadiaCodec>('codec', ConfigType.LOCAL);
    static RESOLUTION = new ConfigEntry<StadiaResolution>('resolution', ConfigType.LOCAL);
    static AUTH_TOKEN = new ConfigEntry<string>('auth-token', ConfigType.LOCAL);
    static MONITOR_ITEMS = new ConfigEntry<{[id: string]: { index: number, visible: boolean }}>('monitor-items', ConfigType.LOCAL);
    static LOGIN_SKIPPED = new ConfigEntry<boolean>('login-skipped', ConfigType.LOCAL);
    static ENABLE_SYNC = new ConfigEntry<boolean>('enable-sync', ConfigType.SYNC);
}