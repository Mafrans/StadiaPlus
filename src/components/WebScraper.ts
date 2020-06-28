import { Component } from '../Component';
import Logger from '../Logger';
import Util from '../Util';
import { Language } from '../Language';
import { StadiaPlusDB } from '../StadiaPlusDB';

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

                if(achievements != null) {
                    StadiaPlusDB.ProfileConnector.setAchievements(JSON.parse(achievements));
                }

                if(user != null) {
                    StadiaPlusDB.ProfileConnector.setUserData(JSON.parse(user));
                }
            })

            const script = document.createElement('script');
            script.innerHTML = `
                (function() {
                    var origOpen = XMLHttpRequest.prototype.open;
                    XMLHttpRequest.prototype.open = function() {
                        this.addEventListener('load', function() {
                            if(this.responseURL.includes('sis9oc')) {
                                // Achievements

                                const lines = this.responseText.split('\\n');
                                for(const l of lines) {
                                    if(l.includes('sis9oc')) { 
                                        const arr = JSON.parse(JSON.parse(l + ']')[0][2])[0];
                                        const achievements = [];
                                        for(const e of arr) {
                                            if(e[3] > 0) {
                                                achievements.push({
                                                    name: e[0],
                                                    description: e[1],
                                                    value: e[3],
                                                    game: e[6]
                                                });
                                            }
                                        }

                                        const sandboxer = document.getElementById('web-scraper-sandboxer');

                                        sandboxer.setAttribute('data-user', null); // Make sure to reset user data so it's not sent repeatedly to the server
                                        sandboxer.setAttribute('data-achievements', JSON.stringify(achievements));
                                        sandboxer.click();
                                    }
                                }
                            }
                            else if(this.responseURL.includes('D0Amud')) {
                                // Name#XXXX
                                console.log('Name#XXXX');

                                const lines = this.responseText.split('\\n');
                                for(const l of lines) {
                                    if(l.includes('D0Amud')) { 
                                        const arr = JSON.parse(JSON.parse(l + ']')[0][2])[5];
                                        console.log(arr);
                                        const user = {
                                            name: arr[0][0],
                                            tag: arr[0][1],
                                            avatar: arr[1][1]
                                        };

                                        const sandboxer = document.getElementById('web-scraper-sandboxer');
                                        
                                        sandboxer.setAttribute('data-achievements', null); // Make sure to reset achievements so they're not sent repeatedly to the server
                                        sandboxer.setAttribute('data-user', JSON.stringify(user));
                                        sandboxer.click();
                                    }
                                }
                            }
                        });
                        origOpen.apply(this, arguments);
                    };
                })();
            `
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
