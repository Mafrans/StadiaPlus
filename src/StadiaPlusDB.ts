/* eslint-disable no-use-before-define */
import axios from 'axios';
import { LocalStorage } from './Storage';
import Logger from './Logger';
import { Language } from './Language';

export class StadiaPlusDB {
    static LFGConnector: LFGConnector;
    static ProfileConnector: ProfileConnector;

    static url: string;
    static authToken: string;
    static connected: boolean;

    static connect(url: string): Promise<boolean> {
        Logger.info(Language.get('stadiaplusdb.connecting', { url }));
        StadiaPlusDB.url = url;
        StadiaPlusDB.LFGConnector = new LFGConnector();
        StadiaPlusDB.ProfileConnector = new ProfileConnector();

        return new Promise((resolve) => {
            void this.testConnection()
                .then((connected) => {
                    StadiaPlusDB.connected = connected;

                    resolve(connected);
                });
        });
    }

    static testConnection(): Promise<boolean> {
        return new Promise((resolve) => {
            axios.get(`${StadiaPlusDB.url}/api/ping`)
                .then(() => resolve(true))
                .catch(() => resolve(false));
        });
    }

    static getProfile(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            axios.get(`${StadiaPlusDB.url}/api/user?token=${StadiaPlusDB.authToken}`)
                .then((res) => {
                    if (Object.prototype.hasOwnProperty.call(res.data, 'error')) {
                        reject(res.data);
                        return;
                    }
                    resolve(res.data);
                })
                .catch(() => reject({ error: 'Could not connect to profile server' }));
        });
    }

    static isConnected(): boolean {
        return StadiaPlusDB.connected && StadiaPlusDB.url != null;
    }

    static isAuthenticated(): boolean {
        return StadiaPlusDB.isConnected() && StadiaPlusDB.authToken != null;
    }

    static authenticate(): Promise<unknown> {
        return new Promise((resolve, reject) => {
            if (!StadiaPlusDB.isConnected()) {
                reject({
                    error: 'Not connected to any database',
                });
            }

            chrome.identity.launchWebAuthFlow(
                {
                    url: `${StadiaPlusDB.url}/auth/google?redirect=${chrome.identity.getRedirectURL('database')}`,
                    interactive: true,
                },
                (responseUrl?: string) => {
                    if (responseUrl == null) {
                        reject({
                            error: 'Authentication failed',
                        });
                        return;
                    }

                    const url = new URL(responseUrl);
                    StadiaPlusDB.authToken = url.hash.substring(1);
                    void LocalStorage.AUTH_TOKEN.set(StadiaPlusDB.authToken)
                        .then(() => resolve(StadiaPlusDB.authToken));
                },
            );
        });
    }

    static signout(): Promise<unknown> {
        return axios({
            method: 'post',
            url: `${StadiaPlusDB.url}/api/signout`,
            data: {
                token: StadiaPlusDB.authToken,
            },
        });
    }

    static wipedata(): Promise<unknown> {
        return axios({
            method: 'post',
            url: `${StadiaPlusDB.url}/api/wipedata`,
            data: {
                token: StadiaPlusDB.authToken,
            },
        });
    }
}

export class LFGConnector {
    get(game: string): Promise<unknown> {
        return axios.get(`${StadiaPlusDB.url}/api/lfg/${game}`);
    }

    post(game: string): Promise<unknown> {
        if (!StadiaPlusDB.isConnected()) {
            return new Promise((resolve, reject) => reject({ error: 'Not connected to the StadiaPlusDB database' }));
        }
        if (!StadiaPlusDB.isAuthenticated()) {
            return new Promise((resolve, reject) => reject({ error: 'Not authenticated with StadiaPlusDB' }));
        }
        return axios({
            method: 'post',
            url: `${StadiaPlusDB.url}/api/lfg`,
            data: {
                token: StadiaPlusDB.authToken,
                game,
            },
        });
    }
}

export class ProfileConnector {
    async setData(data: unknown): Promise<unknown> {
        if (!StadiaPlusDB.isConnected()) {
            return new Promise((resolve, reject) => reject({ error: 'Not connected to the StadiaPlusDB database' }));
        }
        if (!StadiaPlusDB.isAuthenticated()) {
            return new Promise((resolve, reject) => reject({ error: 'Not authenticated with StadiaPlusDB' }));
        }

        return axios({
            method: 'post',
            url: `${StadiaPlusDB.url}/api/update`,
            data: {
                token: StadiaPlusDB.authToken,
                game: data,
            },
        });
    }
}
