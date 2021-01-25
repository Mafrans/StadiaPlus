import Logger from '../main/src/Logger';
import DBProfile from './models/DBProfile';
import { Config } from './Config';

export default class StadiaPlusDB {
    static url: string;
    static connected: boolean;
    static authToken: string | null = null;

    static async connect(url: string) {
        Logger.info(`Connecting to ${url}`);
        this.url = url;
        this.connected = await this.testConnection();
        return this.connected;
    }

    static async testConnection(): Promise<boolean> {
        try {
            const response = await fetch(`${this.url}/api/ping`);

            return response !== null
                && response !== undefined
                && response.body !== null;
        } catch (e) {
            Logger.error(e);
            return false;
        }
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
            if (await this.getProfile() === null) {
                Logger.warning('Your authentication token is likely outdated, requesting a new one...');
                await this.googleSignIn();
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
        return fetch(`${this.url}/api/signout`, {
            method: 'POST',
            body: JSON.stringify({ token: this.authToken }),
        });
    }

    static async getProfile(): Promise<DBProfile | null> {
        if (!this.connected) {
            Logger.warning('Trying to run getProfile() without being connected!');
            return null;
        }

        let response;
        try {
            response = await fetch(`${this.url}/api/user?token=${StadiaPlusDB.authToken}`);
        } catch (e) {
            Logger.error(e);
            return null;
        }

        const json = await response.json();
        if (json.hasOwnProperty('error')) {
            Logger.error(json.error);
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
}