import { LibraryGame } from './LibraryGame';
import Util from '../util/Util';

/**
 * Different types of filtering, represented as numbers
 *
 * @export the FilterOrder type
 * @class FilterOrder
 */

export class FilterOrder {
    public id!: number;
    public name!: string;
    public sort!: (games: LibraryGame[]) => LibraryGame[];

    /**
     * Default Stadia sorting, recent/new games.
     *
     * @static
     * @memberof FilterOrder
     */
    static RECENT: FilterOrder = {
        id: 0,
        name: 'recent',
        sort: (games) => FilterOrder.sortRecent(games),
    };

    /**
     * Alphabetical order.
     *
     * @static
     * @memberof FilterOrder
     */
    static ALPHABETICAL: FilterOrder = {
        id: 1,
        name: 'alphabetical',
        sort: (games) => FilterOrder.sortAlphabetical(games),
    };

    /**
     * Random order.
     *
     * @static
     * @memberof FilterOrder
     */
    static RANDOM: FilterOrder = {
        id: 2,
        name: 'random',
        sort: (games) => FilterOrder.sortRandom(games),
    };

    static from(id: number): FilterOrder {
        const order = this.values().find((e) => e.id === id);

        if (order === undefined) return FilterOrder.RECENT;
        return order;
    }

    static values(): FilterOrder[] {
        return [FilterOrder.RECENT, FilterOrder.ALPHABETICAL, FilterOrder.RANDOM];
    }

    /**
     * Get the sorting method of the inputed order.
     *
     * @static
     * @returns a function sorting games by the inputed order.
     * @param {FilterOrder} order
     * @memberof FilterOrder
     */
    static getSorter(order: FilterOrder): (games: LibraryGame[]) => LibraryGame[] {
        switch (order) {
            case this.RECENT:
                return (games) => FilterOrder.sortRecent(games);

            case this.ALPHABETICAL:
                return (games) => FilterOrder.sortAlphabetical(games);

            case this.RANDOM:
                return (games) => FilterOrder.sortRandom(games);

            default:
                return (games) => FilterOrder.sortRecent(games);
        }
    }

    /**
     * Sort by recent games.
     *
     * @private
     * @static
     * @param {*} a
     * @param {*} b
     * @returns number representing which parameter is where.
     * @memberof FilterOrder
     */
    private static sortRecent(games: LibraryGame[]): LibraryGame[] {
        return games;
    }

    /**
     * Sort alphabetically.
     *
     * @private
     * @static
     * @param {*} a
     * @param {*} b
     * @returns number representing which parameter is where.
     * @memberof FilterOrder
     */
    private static sortAlphabetical(games: LibraryGame[]): LibraryGame[] {
        return games.sort((a, b) => a.name.localeCompare(b.name));
    }

    private static sortRandom(games: LibraryGame[]): LibraryGame[] {
        return Util.shuffle(games);
    }
}
