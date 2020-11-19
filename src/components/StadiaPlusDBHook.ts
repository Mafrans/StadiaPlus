/* eslint-disable no-restricted-globals */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/no-webpack-loader-syntax */
import { Component } from '../Component';
import Logger from '../Logger';
import Util from '../util/Util';
import { Language } from '../Language';
import { StadiaPlusDB } from '../StadiaPlusDB';
import './styles/StadiaPlusDBHook.scss';

// Import the runnable as a raw string
// @ts-ignore
import runnable from '!raw-loader!../util/WebScraperRunnable';

interface StadiaPlusDBGameData {
    game: {
        name: string;
    }
}

/**
 * A web scraper that tracks http requests and parses them.
 *
 * @export the WebScraper type.
 * @class WebScraper
 * @extends {Component}
 */
export class StadiaPlusDBHook extends Component {
    /**
     * The component tag, used in language files.
     */
    tag = 'stadiaplusdb';

    /**
     * The popup element.
     */
    popup: HTMLElement | null = null;

    /**
     * Is in game.
     */
    inGame = false;

    constructor() {
        super();

        window.addEventListener('DOMContentLoaded', () => {
            const sandboxer = document.createElement('button');
            sandboxer.style.display = 'none';
            sandboxer.id = 'web-scraper-sandboxer';
            document.body.appendChild(sandboxer);
            sandboxer.addEventListener('click', () => {
                const dataString = sandboxer.getAttribute('data');

                if (dataString !== null) {
                    const data = JSON.parse(dataString) as StadiaPlusDBGameData;
                    Logger.info(Language.get('stadiaplusdb.updating', { game: data.game.name }));
                    StadiaPlusDB.ProfileConnector.setData(data)
                        .catch((err) => Logger.error(err));
                }
            });

            const script = document.createElement('script');
            script.innerHTML = runnable as string;
            document.body.appendChild(script);
        });
    }

    /**
     * Called on startup, logs to the console.
     *
     * @memberof WebScraper
     */
    onStart(): void {
        this.active = true;
        Logger.component(Language.get('component.enabled', { name: this.name }));
    }

    /**
     * Called on stop, logs to the console.
     *
     * @memberof WebScraper
     */
    onStop(): void {
        this.active = false;
        Logger.component(Language.get('component.disabled', { name: this.name }));
    }

    updateGame(uuid: string): void {
        Util.desandbox(`WebScraperRunnable.update('${uuid}')`);
    }

    oldURL = '';
    onUpdate(): void {
        if (StadiaPlusDB.isAuthenticated()) {
            if (location.href !== this.oldURL) {
                if (location.href.includes('player')) {
                    Util.desandbox(`WebScraperRunnable.update('${location.href.split('/').pop() as string}')`);
                } else if (this.oldURL.includes('player')) {
                    Util.desandbox(`WebScraperRunnable.update('${this.oldURL.split('/').pop() as string}')`);
                }
                this.oldURL = location.href;
            }
        }
    }
}
