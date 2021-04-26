import React from 'react';
import { StadiaPlusDB } from '../../../shared/StadiaPlusDB';
import { Config } from '../../../shared/Config';
import Logger from '../Logger';
import { onPageChanged } from '../events/PageChangeEvent';

interface AFLibraryData {
    data: [boolean, [string, [string, string, boolean, number]], unknown[]];
    hash: string,
    isError: boolean,
    key: string,
    sideChannel: unknown,
}

function getGameIds(): { uuid: string, subId: string }[] {
    const initDataCallback = Array.from(document.querySelectorAll('body>script')).find(
        (script) => script.attributes
            && script.attributes.length === 1
            && script.hasAttribute('nonce')
            && script.textContent?.substring(0, 19) === 'AF_initDataCallback'

            // IMPORTANT: This ds:4 key and the information in this object is subject to change at any time.
            // If this code errors, this is likely to be your culprit.
            && script.textContent?.includes("key: 'ds:4"),
    )?.textContent;

    const libraryData = eval(`(() => (${initDataCallback?.substring('AF_initDataCallback('.length, initDataCallback.length - ');'.length) as string}))()`) as AFLibraryData;

    try {
        // IMPORTANT: If the ds:4 key and its contents change, these values will be outdated and error.
        return libraryData.data[2].map((game: any) => ({
            uuid: game[1][4] as string,
            subId: game[1][0] as string
        }));
    }
    catch (e) {
        Logger.error(
            'Fatal Error! Something went wrong while scraping game ids.\n' +
            'Contact the developer immediately, or create an issue on https://github.com/Mafrans/StadiaPlus'
        )
        return [];
    }
}

const InitLibraryComponent = () => {
    onPageChanged(event => {
        if (event.page === 'home') {
            void Config.GAME_IDS.set(getGameIds());
        }
    });
}

export default InitLibraryComponent;
