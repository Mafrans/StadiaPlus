import Logger from './Logger';
import { Config } from './Config';
import { DBModel } from './models/DBModel';
import { stateStore } from '../main/src/state/StateStore';

export interface Profile {
    avatar: string
    names: string[]
    location?: string
    score: number
}

class StadiaPlusDB {
    url: string = '';
    connected: boolean = false;
    authToken: string | null = null;
    authenticated = false;
    listeners: Set<() => void> = new Set<() => void>();

    async connect(url: string) {
        this.url = url;
        Logger.info(`Connecting to ${this.url}`);
        this.connected = await this.checkConnected();

        if (this.connected) {
            this.listeners.forEach(it => it());
        }

        return this.connected;
    }

    onConnect(callback: () => void) {
        this.listeners.add(callback);
    }

    async checkConnected(): Promise<boolean> {
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

    async authFetch(path: string, options?: { type?: 'GET' | 'POST', body?: object }) {
        return fetch(`${this.url}/${path}`, {
            method: options?.type || 'GET',
            body: options?.body && JSON.stringify(options.body),
            headers: this.authToken ? {
                authorization: `Bearer ${this.authToken}`
            } : undefined
        })
    }

    async checkAuthenticated(): Promise<boolean> {
        if (this.authToken == null) {
            this.authToken = await Config.AUTH_TOKEN.get();
        }

        try {
            const response = await this.authFetch('api/ping');

            if (response === null) {
                return false;
            }

            const json = await response.json();
            return json.authorized as boolean;
        } catch (e) {
            throw new Error('Timed out');
        }
    }

    async googleSignIn(): Promise<void> {
        this.authToken = await this.oauthSignIn('google');
        await Config.AUTH_TOKEN.set(this.authToken);
    }

    async patreonSignIn(): Promise<void> {
        await this.oauthSignIn('patreon');
    }

    oauthData = {
        google: {
            external: false,
            redirect: chrome.identity ? chrome.identity.getRedirectURL('database') : ''
        },
        patreon: {
            external: true,
            redirect: `https://${this.url}/auth/patreon/finished`
        }
    }

    async oauthSignIn(type: 'google' | 'patreon') {
        let url = `${this.url}/auth/${type}?login=${this.authToken}&redirect=${this.oauthData[type].redirect}`;

        if (this.oauthData[type].external) {
            window.open(url, '_open');
            return '';
        }

        const responseUrl: string = await new Promise(resolve => chrome.identity.launchWebAuthFlow({
            url,
            interactive: true,
        }, a => resolve(a as string)));
        const urlData = new URL(responseUrl);
        return urlData.hash.substring(1);
    }

    async authenticate(): Promise<boolean> {
        if (!this.isConnected()) {
            Logger.error('Attempting to authenticate without being connected.');
        }
        if (this.authenticated) {
            Logger.warning('Duplicate authentication attempt.');
        }

        this.authToken = await Config.AUTH_TOKEN.get();

        if (this.authToken !== null) {
            if (await this.checkAuthenticated()) {
                this.authenticated = true;
                stateStore.setAuthToken(this.authToken);
            }
            else {
                Logger.warning('Your authentication token is outdated');
            }
        }
        return this.authenticated;
    }

    signout(): Promise<unknown> {
        return fetch(`${this.url}/api/signout`, {
            method: 'POST',
            body: JSON.stringify({ token: this.authToken }),
        });
    }

    wipedata(): Promise<unknown> {
        return this.authFetch('api/signout', { type: 'POST' });
    }

    async getOwnProfile(): Promise<Profile | null> {
        if (!this.connected) {
            Logger.warning('Trying to run getProfile() without being connected!');
            return null;
        }

        let response;
        try {
            response = await this.authFetch('api/profile/self');
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

    async getOtherProfile(name: string, tag: string): Promise<Profile | null> {
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

    isConnected(): boolean {
        return this.connected && this.url != null;
    }

    isAuthenticated(): boolean {
        return this.isConnected() && this.authToken != null;
    }

    async updateGameProgress(userId: string, gameId: string) {
        if (!this.isConnected()) {
            Logger.error('Not connected to the StadiaPlusDB database');
            return;
        }
        if (!this.isAuthenticated()) {
            Logger.error('Not authenticated with StadiaPlusDB' );
            return;
        }

        const data = await DBModel.fetchData(userId, gameId);
        const profile = DBModel.getProfile(data);
        const game = DBModel.getGame(data, gameId);
        const playTime = DBModel.getPlayTime(data, gameId);
        const achievements = DBModel.getAchievements(data);
        const achievementCount = DBModel.getAchievementCount(data);

        const response = await fetch(`${this.url}/api/profile/update`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.authToken
            },
            body: JSON.stringify({
                data: {
                    profile,
                    game,
                    playTime,
                    achievements,
                    achievementCount
                }
            }),
        });

        if (response.status !== 200) {
            throw Error(response.status.toString());
        }
    }
}

export default new StadiaPlusDB();