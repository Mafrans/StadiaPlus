import { Component } from '../Component';
import Logger from '../Logger';
import Util from '../Util';
import { Language } from '../Language';
import { StadiaPlusDB } from '../StadiaPlusDB';
import './styles/WebScraper.scss';

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
                const data = JSON.parse(sandboxer.getAttribute('data'));
                StadiaPlusDB.ProfileConnector.setAchievements(data.achievements);
                StadiaPlusDB.ProfileConnector.setUserData(data.user);
                StadiaPlusDB.ProfileConnector.setPlayTime(data.game.uuid, data.time);
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

    updateGame(uuid: string) {
        const userId = document.querySelector('.ksZYgc.VGZcUb').getAttribute('data-player-id');
        Util.desandbox(`
            WebScraperRunnable.fetchData('${userId}', '${uuid}')
            .then(data => {
                console.log(data);
                const sandboxer = document.getElementById('web-scraper-sandboxer');
                sandboxer.setAttribute('data', JSON.stringify(data));
                sandboxer.click();
            })
        `);
    }

    onUpdate() { }
}
