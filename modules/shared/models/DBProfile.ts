import DBGame from './DBGame';
import DBAchievement from './DBAchievement';

export default class DBProfile {
    public avatar?: string;
    public games: {[key: string]: DBGame} = {};
    public username?: string;
    public tag?: string;

    constructor(partial: Partial<DBProfile>) {
        this.avatar = partial.avatar;
        this.games = partial.games !== undefined ? partial.games : {} ;
        this.username = partial.username;
        this.tag = partial.tag;
    }

    async fetchGame(userId: string, gameId: string): Promise<DBGame | null> {
        let response = await fetch(`https://stadia.google.com/profile/${userId}/detail/${gameId}`);
        const text = await response.text();

        const error = text.match(new RegExp(`<div id="af-error-container">.*<b>([0-9]{3})\\.<\\/b>`));
        if (error !== null && error.length > 1) {
            throw new Error(error[1]);
        }

        const playData = text.match(new RegExp(`\\[\\[\\["${gameId}",.+\\n.+\\n,\\[([0-9]+)`));
        const achievementData = text.match(new RegExp("AF_initDataCallback\\(\\{ *key: *'ds:3'.*?data: *((.|\\n)*?), *sideChannel: *\\{\\}\\}\\)"));

        if (playData === null || achievementData === null) {
            return null;
        }

        const data = JSON.parse(achievementData[1])[0];

        const achievements: DBAchievement[] = [];
        data[5][0].forEach((entry: any) => {
            achievements.push({
                name: entry[0] as string,
                description: entry[1] as string,
                value: entry[3] as number,
                icon: entry[8][0][0][1] as string,
                game: entry[6] as string,
                id: entry[7] as number,
            });
        });

        const game: DBGame = {
            achievements,
            name: data[0][1],
            time: parseInt(playData[1]),
            uuid: gameId,
        }

        this.avatar = data[5][3][1][1];
        this.username = data[5][3][0][0];
        this.tag = data[5][3][0][1];
        this.games[gameId] = game;

        return game;
    }
}