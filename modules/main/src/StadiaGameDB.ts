export namespace StadiaGameDB {
    export const games: { [uuid: string]: Game } = {};

    export async function update(): Promise<void> {
        const gameDB: string[][] = (await (
            await fetch('https://stadiagamedb.com/data/gamedb.json')
        ).json())['data'];

        const uuidMap: { [key: string]: number } = (await (
            await fetch('https://stadiagamedb.com/data/uuidmap.json')
        ).json())['uuidMap'];

        Object.keys(uuidMap).forEach((uuid) => {
            const entry = gameDB[uuidMap[uuid]];
            if(!entry) {
                return;
            }

            let imgName = /images\/posters\/([a-z0-9_.-]+).png/g.exec(entry[0])?.[1];
            if (imgName === undefined) imgName = '';

            games[uuid] = {
                uuid,
                storeId: /https:\/\/stadia.google.com\/store\/details\/([0-9a-z/]+)/g.exec(entry[0])?.[1],
                img: `https://stadiagamedb.com/images/posters/webp/square/${imgName}.webp`,
                name: entry[1],
                tags: entry[2].split(', '),
                date: entry[3],
                resolution: entry[4],
                onlineTypes: entry[5].split(', '),
                rating: Number.isNaN(parseInt(entry[6], 10))
                    ? undefined : parseInt(entry[6], 10),
            };
        });
    }

    export function random(): Game {
        return games[
            Object.keys(games)[Math.floor(Math.random() * Object.keys(games).length)]
        ];
    }

    export interface Game {
        uuid: string;
        storeId?: string;
        img: string;
        name: string;
        tags: string[];
        date: string;
        resolution: string;
        onlineTypes: string[];
        rating?: number;
    }

    export const onlineTypes: { [id: string]: string } = {
        'single player': 'Singleplayer',
        'online multiplayer': 'Multiplayer',
        'online co-op': 'Co-op',
        'local multiplayer': 'Local Multiplayer',
        'local co-op': 'Local Co-op',
        'split screen': 'Splitscreen',
        'competitive': 'Competitive',
        'cross platform multiplayer': 'Cross Platform'
    };

    export const tags: { [id: string]: string } = {
        'action': 'Action',
        'adventure': 'Adventure',
        'shooter': 'Shooter',
        'role-playing game': 'Role-playing Game',
        'arcade': 'Arcade',
        'puzzle': 'Puzzle',
        'kids & family': 'Kids & Family',
        'racing': 'Racing',
        'fighting': 'Fighting',
        'music or rhythm': 'Music',
        'simulation': 'Simulation',
        'sports': 'Sports',
        'strategy': 'Strategy',
        'board game': 'Tabletop'
    };
}
