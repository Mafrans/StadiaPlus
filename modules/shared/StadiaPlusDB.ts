import Logger from '../main/src/Logger';
import { Config } from './Config';
import { DBModel } from './models/DBModel';
import { triggerAuthenticatedEvent } from '../main/src/events/AuthenticatedEvent';

export namespace StadiaPlusDB {
    export let url: string;
    export let connected: boolean;
    export let authToken: string | null = null;
    export let authenticated = false;
    const listeners: Set<() => void> = new Set<() => void>();

    export interface Profile {
        avatar: string
        names: string[]
        location?: string
        score: number
    }

    export async function connect(url: string) {
        Logger.info(`Connecting to ${url}`);
        StadiaPlusDB.url = url;
        connected = await checkConnected();

        if (connected) {
            listeners.forEach(it => it());
        }

        return connected;
    }

    export function onConnect(callback: () => void) {
        listeners.add(callback);
    }

    export async function checkConnected(): Promise<boolean> {
        try {
            const response = await fetch(`${url}/api/ping`);

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

    async function authFetch(path: string, options?: { type?: 'GET' | 'POST', body?: object }) {
        return fetch(`${url}/${path}`, {
            method: options?.type || 'GET',
            body: options?.body && JSON.stringify(options.body),
            headers: authToken ? {
                authorization: `Bearer ${authToken}`
            } : undefined
        })
    }

    export async function checkAuthenticated(): Promise<boolean> {
        if (authToken == null) {
            authToken = await Config.AUTH_TOKEN.get();
        }

        try {
            const response = await authFetch('api/ping');

            if (response === null) {
                return false;
            }

            const json = await response.json();
            return json.authorized as boolean;
        } catch (e) {
            throw new Error('Timed out');
        }
        return false;
    }

    export async function googleSignIn(): Promise<void> {
        authToken = await oauthSignIn('google');
        await Config.AUTH_TOKEN.set(authToken);
    }

    export async function patreonSignIn(): Promise<void> {
        await oauthSignIn('patreon');
    }

    const oauthData = {
        google: {
            external: false,
            redirect: chrome.identity ? chrome.identity.getRedirectURL('database') : ''
        },
        patreon: {
            external: true,
            redirect: `https://${StadiaPlusDB.url}/auth/patreon/finished`
        }
    }

    export async function oauthSignIn(type: 'google' | 'patreon') {
        let url = `${StadiaPlusDB.url}/auth/${type}?login=${authToken}&redirect=${oauthData[type].redirect}`;

        if (oauthData[type].external) {
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

    export async function authenticate(): Promise<boolean> {
        if (!isConnected()) {
            Logger.error('Attempting to authenticate without being connected.');
        }
        if (authenticated) {
            Logger.warning('Duplicate authentication attempt.');
        }

        authToken = await Config.AUTH_TOKEN.get();

        if (authToken !== null) {
            if (await checkAuthenticated()) {
                authenticated = true;
                triggerAuthenticatedEvent({ token: authToken });
            }
            else {
                Logger.warning('Your authentication token is outdated');
            }
        }
        return authenticated;
    }

    export function signout(): Promise<unknown> {
        return fetch(`${url}/api/signout`, {
            method: 'POST',
            body: JSON.stringify({ token: authToken }),
        });
    }

    export function wipedata(): Promise<unknown> {
        return authFetch('api/signout', { type: 'POST' });
    }

    export async function getOwnProfile(): Promise<Profile | null> {
        if (!connected) {
            Logger.warning('Trying to run getProfile() without being connected!');
            return null;
        }

        let response;
        try {
            response = await authFetch('api/profile/self');
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

    export async function getOtherProfile(name: string, tag: string): Promise<Profile | null> {
        if (!connected) {
            Logger.warning('Trying to run getProfile() without being connected!');
            return null;
        }

        let response;
        try {
            response = await fetch(`${url}/api/profile/${name}/${tag}`);
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

    export function isConnected(): boolean {
        return StadiaPlusDB.connected && StadiaPlusDB.url != null;
    }

    export function isAuthenticated(): boolean {
        return StadiaPlusDB.isConnected() && StadiaPlusDB.authToken != null;
    }

    export async function updateGameProgress(userId: string, gameId: string) {
        if (!StadiaPlusDB.isConnected()) {
            Logger.error('Not connected to the StadiaPlusDB database');
            return;
        }
        if (!StadiaPlusDB.isAuthenticated()) {
            Logger.error('Not authenticated with StadiaPlusDB' );
            return;
        }

        const data = await DBModel.fetchData(userId, gameId);
        const profile = DBModel.getProfile(data);
        const game = DBModel.getGame(data, gameId);
        const playTime = DBModel.getPlayTime(data, gameId);
        const achievements = DBModel.getAchievements(data);

        console.log({
            profile,
            game,
            playTime,
            achievements
        })

        const response = await fetch(`${url}/api/profile/update`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + authToken
            },
            body: JSON.stringify({
                data: {
                    profile,
                    game,
                    playTime,
                    achievements
                }
            }),
        });

        console.log(`${response.status} - ${response.statusText}`);

        if (response.status !== 200) {
            throw Error(response.status.toString());
        }
    }
}