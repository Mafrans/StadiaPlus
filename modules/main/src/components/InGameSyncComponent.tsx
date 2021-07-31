import React, { useEffect, useRef } from 'react';
import { StadiaPlusDB } from '../../../shared/StadiaPlusDB';
import { StadiaSelectors } from '../StadiaSelectors';
import { Config } from '../../../shared/Config';
import { asyncEffect, getPlayerGameId } from '../Util';
import { WithStore } from '../state/StateStore';

const InGameSyncComponent = (props: WithStore<{}>) => {
    const syncEnabled = useRef<boolean>(false);
    const gameId = useRef<string>("");

    const { page, lastPage, authToken } = props.store;

    const reportGameProgress = () => {
        if (!authToken || !gameId.current) {
            return;
        }

        const avatarElement = document.querySelector(StadiaSelectors.USER_AVATAR);
        if (avatarElement) {
            const userId = avatarElement.getAttribute('data-player-id');

            void StadiaPlusDB.updateGameProgress(userId!, gameId.current!);
        }
    }

    useEffect(() => {
        if (!authToken) {
            return;
        }

        if (page === 'player') {
            gameId.current = getPlayerGameId();
        }

        if (page !== 'player' && lastPage === 'player') {
            console.log('report game progress', gameId);
            reportGameProgress();
        }
    }, [page])

    asyncEffect(async () => {
        syncEnabled.current = Boolean(await Config.ENABLE_SYNC.get());
        document.body.addEventListener('beforeunload', reportGameProgress);
    }, []);

    return null;
}

export default InGameSyncComponent;


