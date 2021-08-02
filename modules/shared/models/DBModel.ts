export namespace DBModel {
    export interface Achievement {
        name: string
        description: string
        game: string
        icon: string
        id: number
        value: number
    }

    export interface Game {
        name: string
        image: string
        id: string
    }

    export interface Profile {
        avatar: string
        name: string
    }

    export interface PatreonUser {
        firstName: string
        lastName: string
        reward: 'none' | 'bronze' | 'silver' | 'gold'
    }

    export function getGameData(data: string) {
        const gameData = data.match(new RegExp("AF_initDataCallback\\(\\{ *key: *'ds:3'.*?data: *((.|\\n)*?), *sideChannel: *\\{\\}\\}\\)"));
        if (!gameData) {
            return null;
        }

        return JSON.parse(gameData[1])[0];
    }

    export function getAchievements(data: string): DBModel.Achievement[] {
        const gameData = getGameData(data);

        return gameData[5][0].map((e: any) => ({
            name: e[0],
            description: e[1],
            value: e[3],
            icon: e[8][0][0][1],
            game: e[6],
            id: e[7]
        } as DBModel.Achievement));
    }

    export function getAchievementCount(data: string): number {
        return getGameData(data)[5][2];
    }

    export function getPlayTime(data: string, gameId: string): number {
        const gameData = getGameData(data);
        return Number(gameData[2]);
    }

    export function getGame(data: string, gameId: string): DBModel.Game {
        const gameData = getGameData(data);
        return {
            name: gameData[0][1],
            image: gameData[9][2][15][1][0][1],
            id: gameId
        };
    }

    export function getProfile(data: string): DBModel.Profile {
        const profileData = getGameData(data)[5][3];
        const avatar = profileData[1][1];
        const name = profileData[0][0];
        const tag = profileData[0][1];
        return {
            avatar,
            name: name + '#' + tag
        }
    }

    export async function fetchData(userId: string, gameId: string): Promise<string> {
        let response = await fetch(`https://stadia.google.com/profile/${userId}/detail/${gameId}`);
        const text = await response.text();

        const error = text.match(new RegExp(`<div id="af-error-container">.*<b>([0-9]{3})\\.<\\/b>`));
        if (error !== null && error.length > 1) {
            throw new Error(error[1]);
        }

        return text;
    }
}