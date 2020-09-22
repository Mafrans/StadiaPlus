import { Component } from '../Component';
import Logger from '../Logger';
import Util from '../util/Util';
import { Language } from '../Language';
import { StadiaPlusDB } from '../StadiaPlusDB';
import './styles/StadiaPlusDBHook.scss';

// Import the runnable as a raw string
// @ts-ignore
import runnable from '!raw-loader!../util/WebScraperRunnable';
import { create } from '../../docs/assets/js/main';

const chrome = (window as any).chrome;

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
    tag: string = 'stadiaplusdb';

    /**
     * The popup element.
     */
    popup: HTMLElement;

    /**
     * Is in game.
     */
    inGame: boolean;

    constructor() {
        super();

        window.addEventListener('DOMContentLoaded', () => {
            const sandboxer = document.createElement('button');
            sandboxer.style.display = 'none';
            sandboxer.id = 'web-scraper-sandboxer';
            document.body.appendChild(sandboxer);
            sandboxer.addEventListener('click', () => {
                const data = JSON.parse(sandboxer.getAttribute('data'));
                Logger.info(Language.get('stadiaplusdb.updating', { game: data.game.name }));
                StadiaPlusDB.ProfileConnector.setData(data)
                    .catch(console.error);
            });

            const script = document.createElement('script');
            script.innerHTML = runnable;
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

    updateGame(uuid: string) {
        Util.desandbox(`WebScraperRunnable.update('${uuid}')`);
    }

    oldURL: string = '';
    onUpdate() {
        if (StadiaPlusDB.isAuthenticated()) {
            if (location.href != this.oldURL) {
                if (location.href.includes('player')) {
                    Util.desandbox(`WebScraperRunnable.update('${location.href.split('/').pop()}')`);
                } else if (this.oldURL.includes('player')) {
                    Util.desandbox(`WebScraperRunnable.update('${this.oldURL.split('/').pop()}')`);
                }
                this.oldURL = location.href;
            }
        }
    }
}
