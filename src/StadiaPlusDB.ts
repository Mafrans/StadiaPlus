import { LocalStorage } from './Storage';
import axios from 'axios';

const chrome = (window as any).chrome;

export class StadiaPlusDB {
    static LFGConnector: LFGConnector;
    
    static url: string;
    static authToken: string;
    static connected: boolean;

    static connect(url: string): Promise<boolean> {
        StadiaPlusDB.url = url;
        StadiaPlusDB.LFGConnector = new LFGConnector();

        return new Promise((resolve, reject) => {
            this.testConnection()
            .then(connected => {
                StadiaPlusDB.connected = connected;
                
                resolve(connected);
            })
        })
    }

    static testConnection(): Promise<boolean> {
        return new Promise((resolve) => { 
            axios.get(StadiaPlusDB.url)
            .then(() => resolve(true))
            .catch(() => resolve(false));
        })
    }

    static getProfile(): Promise<boolean> {
        return new Promise((resolve, reject) => { 
            axios.get(`${StadiaPlusDB.url}/profile?authToken=${StadiaPlusDB.authToken}`)
            .then(res => {
                if(res.data.hasOwnProperty('error')) {
                    reject(res.data);
                    return;
                }
                resolve(res.data)
            })
            .catch(() => reject({ error: 'Could not connect to profile server' }));
        })
    }

    static isConnected(): boolean {
        return StadiaPlusDB.connected && StadiaPlusDB.url != null;
    }

    static isAuthenticated(): boolean {
        return StadiaPlusDB.authToken != null;
    }

    static authenticate(): Promise<any> {
        return new Promise((resolve: Function, reject: Function) => {
            if(!StadiaPlusDB.isConnected()) {
                reject({
                    error: 'Not connected to any database'
                });
            }
            if(!chrome.hasOwnProperty('identity') || !chrome.identity.hasOwnProperty('launchWebAuthFlow')) {
                reject({
                    error: 'Current environment does not permit using launchWebAuthFlow'
                })
            }
    
            chrome.identity.launchWebAuthFlow(
                {
                    url: `${StadiaPlusDB.url}/auth/google?redirect=${chrome.identity.getRedirectURL('database')}`,
                    interactive: true,
                },
                (responseUrl: string) => {
                    const url = new URL(responseUrl);
                    StadiaPlusDB.authToken = url.hash.substring(1);
                    LocalStorage.AUTH_TOKEN.set(StadiaPlusDB.authToken, () => {
                        resolve(StadiaPlusDB.authToken);
                    });
                }
            );
        });
    }
}

export class LFGConnector {
    get(game: string): Promise<any> {
        return axios.get(`${StadiaPlusDB.url}/lfg/${game}`);
    }

    post(game: string): Promise<any> {
        if(!StadiaPlusDB.isConnected()) {
            return new Promise((resolve, reject) => reject({ error: 'Not connected to the StadiaPlusDB database' }));
        }
        if(!StadiaPlusDB.isAuthenticated()) {
            return new Promise((resolve, reject) => reject({ error: 'Not authenticated with StadiaPlusDB' }));
        }
        return axios({
            method: 'post',
            url: `${StadiaPlusDB.url}/lfg`,
            data: {
                authToken: StadiaPlusDB.authToken,
                game: game
            },
        })
    }
}