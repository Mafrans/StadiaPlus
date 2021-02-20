import DBGame from './models/DBGame';
import { StadiaCodec } from './models/StadiaCodec';

export enum ConfigType {
    LOCAL,
    SYNC
}

export class ConfigEntry<T> {
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
                    chrome.storage.local.set(
                        { [this.tag]: value },
                        () => resolve()
                    );
                });
                return;

            case ConfigType.SYNC:
                await new Promise<void>(resolve => {
                    chrome.storage.sync.set(
                        { [this.tag]: value },
                        () => resolve()
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
}

export class Config {
    static GAME_UPDATES = new ConfigEntry<string[]>('games-updated', ConfigType.SYNC);
    static GAME_IDS = new ConfigEntry<{ uuid: string, subId: string }[]>('games', ConfigType.LOCAL);
    static CODECS = new ConfigEntry<{[uuid: string]: StadiaCodec}>('codecs', ConfigType.LOCAL);
    static AUTH_TOKEN = new ConfigEntry<string>('auth-token', ConfigType.LOCAL);
}