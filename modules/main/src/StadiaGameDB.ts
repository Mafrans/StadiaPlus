/* eslint-disable no-use-before-define */
import { WebDatabase } from './WebDatabase';

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace StadiaGameDB {
    export function update(): Promise<void> {
        return DB.update();
    }

    export function get(uuid: string): StadiaGameDB.Game {
        return DB.get(uuid);
    }

    export function random(): Game {
        return DB.random();
    }

    export function getGames(): { [uuid: string]: Game } {
        return DB.games;
    }

    class DB {
        static games: { [uuid: string]: StadiaGameDB.Game } = {};
        private static gameDB: WebDatabase;
        private static uuidMap: WebDatabase;

        private static async connect(): Promise<void> {
            DB.gameDB = new WebDatabase('https://stadiagamedb.com/data/gamedb.json');
            DB.uuidMap = new WebDatabase('https://stadiagamedb.com/data/uuidmap.json');

            await DB.gameDB.connect();
            await DB.uuidMap.connect();
        }

        static async update() {
            await DB.connect();

            const uuids = (DB.uuidMap.getConnection() as UUIDMap).uuidMap;
            const games = (DB.gameDB.getConnection() as GameDB).data;

            Object.keys(uuids).forEach((uuid) => {
                const entry = games[uuids[uuid]];
                let imgName = /images\/posters\/([a-z0-9_.-]+).png/g.exec(entry[0])?.[1];
                if (imgName === undefined) imgName = '';

                const game: StadiaGameDB.Game = {
                    uuid,
                    storeId: /https:\/\/stadia.google.com\/store\/details\/([0-9a-z/]+)/g.exec(entry[0])?.[1],
                    img: `https://stadiagamedb.com/images/posters/webp/square/${imgName}.webp`,
                    name: entry[1],
                    tags: entry[2]
                        .split(', ')
                        .map((e: string) => StadiaGameDB.Tag.fromId(e.toLowerCase()))
                        .filter((e) => e != null),
                    date: entry[3],
                    resolution: entry[4],
                    onlineTypes: entry[5]
                        .split(', ')
                        .map((e: string) => StadiaGameDB.OnlineType.fromId(e.toLowerCase()))
                        .filter((e) => e != null),
                    rating: Number.isNaN(parseInt(entry[6], 10))
                        ? undefined : parseInt(entry[6], 10),
                };

                DB.games[uuid] = game;
            });
        }

        static get(uuid: string) {
            return DB.games[uuid];
        }

        static random() {
            return DB.games[
                Object.keys(DB.games)[Math.floor(Math.random() * Object.keys(DB.games).length)]
            ];
        }
    }

    export interface Game {
        uuid: string;
        storeId?: string;
        img: string;
        name: string;
        tags: (Tag | undefined)[];
        date: string;
        resolution: string;
        onlineTypes: (OnlineType | undefined)[];
        rating?: number;
    }

    export class OnlineType {
        public id = 'undefined';
        public name = 'undefined';

        static SINGLEPLAYER: OnlineType = { id: 'single player', name: 'Singleplayer' };
        static MULTIPLAYER: OnlineType = { id: 'online multiplayer', name: 'Multiplayer' };
        static ONLINE_COOP: OnlineType = { id: 'online co-op', name: 'Co-op' };
        static LOCAL_MULTIPLAYER: OnlineType = { id: 'local multiplayer', name: 'Local Multiplayer' };
        static LOCAL_COOP: OnlineType = { id: 'local co-op', name: 'Local Co-op' };
        static SPLITSCREEN: OnlineType = { id: 'split screen', name: 'Splitscreen' };
        static COMPETITIVE: OnlineType = { id: 'competitive', name: 'Competitive' };
        static CROSS_PLATFORM: OnlineType = { id: 'cross platform multiplayer', name: 'Cross Platform' };

        private static types: OnlineType[] = [
            OnlineType.SINGLEPLAYER,
            OnlineType.MULTIPLAYER,
            OnlineType.ONLINE_COOP,
            OnlineType.LOCAL_MULTIPLAYER,
            OnlineType.LOCAL_COOP,
            OnlineType.SPLITSCREEN,
            OnlineType.COMPETITIVE,
            OnlineType.CROSS_PLATFORM,
        ];

        static fromId(id: string): OnlineType {
            const type = OnlineType.types.find((e) => e.id === id.toLowerCase());
            if (type === undefined) return new OnlineType();
            return type;
        }

        static values(): OnlineType[] {
            return OnlineType.types;
        }
    }

    export class Tag {
        public id = 'undefined';
        public name = 'undefined';

        static ACTION: Tag = { id: 'action', name: 'Action' };
        static ADVENTURE: Tag = { id: 'adventure', name: 'Adventure' };
        static SHOOTER: Tag = { id: 'shooter', name: 'Shooter' };
        static ROLEPLAYING_GAME: Tag = { id: 'role-playing game', name: 'Role-playing Game' };
        static ARCADE: Tag = { id: 'arcade', name: 'Arcade' };
        static PUZZLE: Tag = { id: 'puzzle', name: 'Puzzle' };
        static KIDS_AND_FAMILY: Tag = { id: 'kids & family', name: 'Kids & Family' };
        static RACING: Tag = { id: 'racing', name: 'Racing' };
        static FIGHTING: Tag = { id: 'fighting', name: 'Fighting' };
        static MUSIC: Tag = { id: 'music or rhythm', name: 'Music' };
        static SIMULATION: Tag = { id: 'simulation', name: 'Simulation' };
        static SPORTS: Tag = { id: 'sports', name: 'Sports' };
        static STRATEGY: Tag = { id: 'strategy', name: 'Strategy' };
        static TABLETOP: Tag = { id: 'board game', name: 'Tabletop' };

        private static tags: Tag[] = [
            Tag.ACTION,
            Tag.ADVENTURE,
            Tag.SHOOTER,
            Tag.ROLEPLAYING_GAME,
            Tag.ARCADE,
            Tag.PUZZLE,
            Tag.KIDS_AND_FAMILY,
            Tag.RACING,
            Tag.FIGHTING,
            Tag.MUSIC,
            Tag.SIMULATION,
            Tag.SPORTS,
            Tag.STRATEGY,
            Tag.TABLETOP,
        ];

        static fromId(id: string): Tag {
            const tag = Tag.tags.find((e) => e.id === id.toLowerCase());
            if (tag === undefined) return new Tag();
            return tag;
        }

        static values(): Tag[] {
            return this.tags;
        }
    }

    export interface UUIDMap {
        uuidMap: {
            [key: string]: number;
        };
    }
    export interface GameDB {
        data: string[][];
    }
}
