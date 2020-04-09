import { Component } from '../Component';
import Logger from '../Logger';
import Util from '../Util';
import { Database } from '../Database';
import './styles/Ratings.scss';

export class Ratings extends Component {

    name: string = "Ratings";

    element: HTMLElement;
    rating: number;
    database: Database;
    uuidMap: Database;
    graceAmount: number = 10;
    maxStars = 5;

    constructor(database: Database, uuidMap: Database) {
        super();

        this.database = database;
        this.uuidMap = uuidMap;
    }

    createElement() {
        this.element = document.createElement('div');
        this.element.classList.add('stadiaplus_rating', 'material-icons-extended');
    }

    getUUID() {
        return location.href.substring('https://stadia.google.com/store/details/'.length, 'https://stadia.google.com/store/details/'.length + 36);
    }

    updateRating() {
        const uuid = this.getUUID();
        const connection = this.database.getConnection()['data'];
        const map = this.uuidMap.getConnection()['uuidMap'];
        
        const entry = connection[map[uuid]];

        this.element.setAttribute('data-rating', entry[6]);
    }

    getStars(rating: number) {
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

    onStart(): void {
        this.enabled = true;
        this.createElement();
        this.element.id = this.id;

        Logger.component('Component', this.name, 'has been enabled');
    }

    onStop(): void {
        this.enabled = false;
        this.element.remove();
        Logger.component('Component', this.name, 'has been disabled');
    }

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
                            ${rating} / 100 (Metacritic)
                        </div>
                    `;
                }
            }
        }
    }
}
