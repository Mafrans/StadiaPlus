import { Component } from '../Component';
import Logger from '../Logger';
import Util from '../Util';
import { WebDatabase } from '../WebDatabase';
import './styles/Ratings.scss';
import { Language } from '../Language';

/**
 * A component adding Metacritic ratings to every Stadia game.
 *
 * @export the Ratings type
 * @class Ratings
 * @extends {Component}
 */
export class Ratings extends Component {
    /**
     * The component tag, used in language files.
     */
    tag: string = 'ratings';

    /**
     * The rating element.
     */
    element: HTMLElement;

    /**
     * The StadiaGameDB database.
     */
    database: WebDatabase;

    /**
     * The StadiaGameDB UUID Map.
     */
    uuidMap: WebDatabase;

    /**
     * The value from each bound in which a game will get 0 or 5 stars.
     */
    graceAmount: number = 10;

    /**
     * The maximum number of stars to award.
     */
    maxStars = 5;

    constructor(database: WebDatabase, uuidMap: WebDatabase) {
        super();

        this.database = database;
        this.uuidMap = uuidMap;
    }

    /**
     * Creates the rating element.
     *
     * @memberof Ratings
     */
    createElement(): void {
        this.element = document.createElement('div');
        this.element.classList.add('stadiaplus_rating', 'material-icons');
    }

    /**
     * The current game UUID.
     *
     * @returns the game UUID as a string.
     * @memberof Ratings
     */
    getUUID(): string {
        return location.href.substring('https://stadia.google.com/store/details/'.length, 'https://stadia.google.com/store/details/'.length + 36);
    }

    /**
     * Updates the current rating, fetching it from the database.
     *
     * @memberof Ratings
     */
    updateRating(): void {
        const uuid = this.getUUID();
        const connection = this.database.getConnection()['data'];
        const map = this.uuidMap.getConnection()['uuidMap'];
        
        const entry = connection[map[uuid]];

        this.element.setAttribute('data-rating', entry[6]);
    }


    /**
     * Calculates how many stars a game should have based on it's rating.
     *
     * @param {number} rating the game's rating.
     * @returns {string[]} an array of icon strings, being either "star", "star_half" or "star_outline".
     * @memberof Ratings 
     */
    getStars(rating: number): string[] {
        const outputStars = [];

        // Clamps the rating to values between 0 and 1,
        // where (0 + graceAmount) is 0 and (100 - graceAmount) is 1
        const clampedR = (rating / 100) * (1 + (this.graceAmount / 100) * 2) - (this.graceAmount / 100);

        for (let i = 0, r = clampedR; i < this.maxStars; i += 1, r -= 1 / this.maxStars) {
            if (r >= 1 / this.maxStars) {
                outputStars.push('star');
            } else if (r >= 0) {
                outputStars.push('star_half');
            } else {
                outputStars.push('star_outline');
            }
        }

        return outputStars;
    }

    /**
     * Called on startup, initializes important variables.
     * 
     * @memberof Ratings
     */
    onStart(): void {
        this.active = true;
        this.createElement();
        this.element.id = this.id;

        Logger.component(Language.get('component.enabled', { name: this.name }));
    }

    /**
     * Called on stop, makes sure to dispose of elements and variables.
     * 
     * @memberof Ratings
     */
    onStop(): void {
        this.active = false;
        this.element.remove();
        Logger.component(Language.get('component.disabled', { name: this.name }));
    }

    /**
     * Called every second, updates the rating element to make sure it always displays the correct value.
     * 
     * @memberof Ratings
     */
    onUpdate() {
        if(Util.isInStoreDetail()) {
            if(!this.exists()) {
                this.updateRating();
                this.updateRenderer();
                const rating = parseInt(this.element.getAttribute('data-rating'));
                const stars = this.getStars(rating);
                
                if (rating > 0) {
                    const nextSibling = this.renderer.querySelector('.ZzBJSb > .BMUnfd');

                    if(nextSibling === null) return;

                    nextSibling.parentNode.insertBefore(this.element, nextSibling);

                    this.element.innerHTML = `
                        ${stars.join(' ')}
        
                        <div class="stadiaplus_rating-tooltip">
                            ${rating} / 100 (${Language.get('ratings.source-name')})
                        </div>
                    `;
                }
            }
        }
    }
}
