import { WebDatabase } from "./WebDatabase";

export namespace StadiaGameDB {

    export function update() {
        return DB.update();
    }

    export function get(uuid: string): StadiaGameDB.Game {
        return DB.get(uuid);
    }

    export function random() {
        return DB.random();
    }

    export function getGames() {
        return DB.games;
    }

    class DB {
        static games: {[uuid: string]: StadiaGameDB.Game} = {};
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

            const uuids = DB.uuidMap.getConnection().uuidMap;
            const games = DB.gameDB.getConnection().data;

            for(const uuid in uuids) {
                const entry = games[uuids[uuid]];
                let game: StadiaGameDB.Game = {
                    uuid: uuid,
                    storeId: /https:\/\/stadia.google.com\/store\/details\/([0-9a-z/]+)/g.exec(entry[0])[1],
                    img: 'https://stadiagamedb.com/images/posters/webp/' + /images\/posters\/([a-z0-9_.-]+).png/g.exec(entry[0])[1] + '.webp',
                    name: entry[1],
                    tags: entry[2].split(', ').map((e: string) => StadiaGameDB.Tag.fromId(e.toLowerCase())).filter((e: any) => e != null),
                    date: entry[3],
                    resolution: entry[4],
                    onlineTypes: entry[5].split(', ').map((e: string) => StadiaGameDB.OnlineType.fromId(e.toLowerCase())).filter((e: any) => e != null),
                    rating: parseInt(entry[6]) === NaN ? null : parseInt(entry[6])
                }

                DB.games[uuid] = game;
            }
        }

        static get(uuid: string) {
            return DB.games[uuid];
        }

        static random() {
            return DB.games[Object.keys(DB.games)[Math.floor(Math.random() * Object.keys(DB.games).length)]];
        }
    }

    export interface Game {
        uuid: string;
        storeId: string;
        img: string;
        name: string;
        tags: Tag[];
        date: string;
        resolution: string;
        onlineTypes: OnlineType[];
        rating: number;
    }

    export class OnlineType {
        public id: string;
        public name: string;

        static SINGLEPLAYER: OnlineType = { id: 'single player', name: 'Singleplayer', };
        static MULTIPLAYER: OnlineType = { id: 'online multiplayer', name: 'Multiplayer', };
        static ONLINE_COOP: OnlineType = { id: 'online co-op', name: 'Co-op' };
        static LOCAL_MULTIPLAYER: OnlineType = { id: 'local multiplayer', name: 'Local Multiplayer', };
        static LOCAL_COOP: OnlineType = { id: 'local co-op', name: 'Local Co-op', };
        static SPLITSCREEN: OnlineType = { id: 'split screen', name: 'Splitscreen', };
        static COMPETITIVE: OnlineType = { id: 'competitive', name: 'Competitive', };
        static CROSS_PLATFORM: OnlineType = { id: 'cross platform multiplayer', name: 'Cross Platform', };

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

        static fromId(id: string) {
            return OnlineType.types.find(e => e.id === id.toLowerCase());
        }

        static values() {
            return OnlineType.types;
        }
    }

    export class Tag {
        public id: string;
        public name: string;

        static ACTION: Tag = { id: 'action', name: 'Action' };
        static ADVENTURE: Tag = { id: 'adventure', name: 'Adventure' };
        static SHOOTER: Tag = { id: 'shooter', name: 'Shooter' };
        static ROLEPLAYING_GAME: Tag = { id: 'role-playing game', name: 'Role-playing Game', };
        static ARCADE: Tag = { id: 'arcade', name: 'Arcade' };
        static PUZZLE: Tag = { id: 'puzzle', name: 'Puzzle' };
        static KIDS_AND_FAMILY: Tag = { id: 'kids & family', name: 'Kids & Family', };
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

        static fromId(id: string) {
            return Tag.tags.find(e => e.id === id.toLowerCase());
        }

        static values() {
            return this.tags;
        }
    }
}
