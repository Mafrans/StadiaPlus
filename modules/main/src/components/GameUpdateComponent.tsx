import React from 'react';
import AbstractComponent, { DefaultProps, DefaultState } from './AbstractComponent';
import StadiaPlusDB from '../../../shared/StadiaPlusDB';
import { Config } from '../../../shared/Config';
import { PageQueryType } from '../../../shared/models/PageQueryType';

interface AFLibraryData {
    data: [boolean, [string, [string, string, boolean, number]], unknown[]];
    hash: string,
    isError: boolean,
    key: string,
    sideChannel: unknown,
}

export default class GameUpdateComponent extends AbstractComponent<DefaultProps, DefaultState> {
    constructor() {
        super({ name: "Game Update Component" });
    }

    async onStart() {
        const url: URL = new URL(location.href);
        const pageQueryType: PageQueryType = parseInt(url.searchParams.get('pqt') as string)

        if (pageQueryType === PageQueryType.UPDATE) {
            return;
        }

        if(await StadiaPlusDB.getOwnProfile() === null) {
            await Config.GAME_UPDATES.set(this.getGameIds());
            console.log(this.getGameIds());
        }
    }

    getGameIds(): string[] {
        const initDataCallback = Array.from(document.querySelectorAll('body>script')).find(
            (script) => script.attributes
                && script.attributes.length === 1
                && script.hasAttribute('nonce')
                && script.textContent?.substring(0, 19) === 'AF_initDataCallback'
                && script.textContent?.includes("key: 'ds:6"),
        )?.textContent;

        const libraryData = eval(`(() => (${initDataCallback?.substring('AF_initDataCallback('.length, initDataCallback.length - ');'.length) as string}))()`) as AFLibraryData;
        const games: string[] = libraryData.data[1].map((game: any) => game[1][0]);

        return games;
    }
}


