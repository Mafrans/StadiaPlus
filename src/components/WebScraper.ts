import { Component } from '../Component';
import Logger from '../Logger';
import Util from '../Util';
import { Language } from '../Language';
import { StadiaPlusDB } from '../StadiaPlusDB';

// Import the runnable as a raw string
// @ts-ignore
import runnable from '!raw-loader!../util/WebScraperRunnable';

const chrome = (window as any).chrome;

/**
 * A web scraper that tracks http requests and parses them.
 *
 * @export the WebScraper type.
 * @class WebScraper
 * @extends {Component}
 */
export class WebScraper extends Component {
    /**
     * The component tag, used in language files.
     */
    tag: string = 'web-scraper';

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
                const achievements = sandboxer.getAttribute('data-achievements');
                const user = sandboxer.getAttribute('data-user');
                const time = sandboxer.getAttribute('data-time');

                if(achievements != null) {
                    StadiaPlusDB.ProfileConnector.setAchievements(JSON.parse(achievements));
                }

                if(user != null) {
                    StadiaPlusDB.ProfileConnector.setUserData(JSON.parse(user));
                }

                if(time != null) {
                    const playTime = JSON.parse(time);
                    StadiaPlusDB.ProfileConnector.setPlayTime(playTime.game, playTime.time);
                }
            })

            const script = document.createElement('script');
            script.innerHTML = runnable;
            document.body.appendChild(script);
        })
    }

    /**
     * Called on startup, logs to the console.
     * 
     * @memberof WebScraper
     */
    onStart(): void {
        this.active = true;
        Logger.component(Language.get('component.enabled', {'name': this.name}));
    }

    /**
     * Called on stop, logs to the console.
     * 
     * @memberof WebScraper
     */
    onStop(): void {
        this.active = false;
        Logger.component(Language.get('component.disabled', {'name': this.name}));
    }

    onUpdate() { }
}
