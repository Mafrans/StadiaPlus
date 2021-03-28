import Logger from '../main/src/Logger';
import DBProfile from './models/DBProfile';
import { Config } from './Config';

export default class StadiaPlusDB {
    static url: string;
    static connected: boolean;
    static authToken: string | null = null;
    private static listeners: Set<() => void> = new Set<() => void>();

    static async connect(url: string) {
        Logger.info(`Connecting to ${url}`);
        this.url = url;
        this.connected = await this.checkConnected();

        if (this.connected) {
            this.listeners.forEach(it => it());
        }

        return this.connected;
    }

    static onConnect(callback: () => void) {
        this.listeners.add(callback);
    }

    static async checkConnected(): Promise<boolean> {
        try {
            const response = await fetch(`${this.url}/api/ping`);

            if (response === null) {
                return false;
            }

            const json = await response.json();
            return json.connected as boolean;
        } catch (e) {
            Logger.error(e);
        }
        return false;
    }

    private static async authFetch(path: string, options?: { type?: 'GET' | 'POST', body?: object }) {
        return fetch(`${this.url}/${path}`, {
            method: options?.type || 'GET',
            body: options?.body && JSON.stringify(options.body),
            headers: this.authToken ? {
                authorization: `Bearer ${this.authToken}`
            } : undefined
        })
    }

    static async checkAuthenticated(): Promise<boolean> {
        if (this.authToken == null) {
            this.authToken = await Config.AUTH_TOKEN.get();
        }

        try {
            const response = await StadiaPlusDB.authFetch('api/ping');

            if (response === null) {
                return false;
            }

            const json = await response.json();
            return json.authorized as boolean;
        } catch (e) {
            Logger.error(e);
        }
        return false;
    }

    static async googleSignIn(): Promise<void> {
        const url = `${this.url}/auth/google?redirect=${chrome.identity.getRedirectURL('database')}`;
        const responseUrl: string = await new Promise(resolve => chrome.identity.launchWebAuthFlow({
            url,
            interactive: true,
        }, a => resolve(a as string)));

        const urlData = new URL(responseUrl);
        this.authToken = urlData.hash.substring(1);
        await Config.AUTH_TOKEN.set(this.authToken);
    }

    static async authenticate(): Promise<boolean> {
        if (!this.isConnected()) {
            Logger.error('Attempting to authenticate without being connected.');
        }

        this.authToken = await Config.AUTH_TOKEN.get();

        if (this.authToken !== null) {
            if (!await this.checkAuthenticated()) {
                Logger.warning('Your authentication token is outdated');
                return false;
            }
            return true;
        }
        return false;
    }

    static signout(): Promise<unknown> {
        return fetch(`${this.url}/api/signout`, {
            method: 'POST',
            body: JSON.stringify({ token: this.authToken }),
        });
    }

    static wipedata(): Promise<unknown> {
        return StadiaPlusDB.authFetch('api/signout', { type: 'POST' });
    }

    static async getOwnProfile(): Promise<DBProfile | null> {
        if (!this.connected) {
            Logger.warning('Trying to run getProfile() without being connected!');
            return null;
        }

        let response;
        try {
            response = await StadiaPlusDB.authFetch('api/user');
        } catch (e) {
            Logger.error(e);
            return null;
        }

        console.log({ response })
        const json = await response.json();
        console.log({ json })
        if (json.hasOwnProperty('error')) {
            Logger.error(json.error);
            return null;
        }

        if(JSON.stringify(json) == '{}') { // Hacky fix, useful because {} is not equal to {}
            return null;
        }

        return json;
    }

    static async getOtherProfile(name: string, tag: string): Promise<DBProfile | null> {
        if (!this.connected) {
            Logger.warning('Trying to run getProfile() without being connected!');
            return null;
        }

        let response;
        try {
            response = await fetch(`${this.url}/api/profile/${name}/${tag}`);
        } catch (e) {
            Logger.error(e);
            return null;
        }

        const json = await response.json();
        if (json.hasOwnProperty('error')) {
            Logger.error(json.error);
            return null;
        }

        if(JSON.stringify(json) == '{}') { // Hacky fix, useful because {} is not equal to {}
            return null;
        }

        return json;
    }

    static isConnected(): boolean {
        return StadiaPlusDB.connected && StadiaPlusDB.url != null;
    }

    static isAuthenticated(): boolean {
        return StadiaPlusDB.isConnected() && StadiaPlusDB.authToken != null;
    }

    static async updateDBProfile(profile: DBProfile) {
        if (!StadiaPlusDB.isConnected()) {
            return new Promise((resolve, reject) => reject({ error: 'Not connected to the StadiaPlusDB database' }));
        }
        if (!StadiaPlusDB.isAuthenticated()) {
            return new Promise((resolve, reject) => reject({ error: 'Not authenticated with StadiaPlusDB' }));
        }

        const response = await fetch(`${StadiaPlusDB.url}/api/update`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                token: this.authToken,
                profile
            }),
        });
    }
}