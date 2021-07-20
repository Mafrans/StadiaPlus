import React, { useEffect } from 'react';
import { StadiaPlusDB } from '../../../shared/StadiaPlusDB';
import Util from '../Util';
import { StadiaSelectors } from '../StadiaSelectors';
import { onAuthenticated } from '../events/AuthenticatedEvent';
import { onPageChanged } from '../events/PageChangeEvent';
import { Config } from '../../../shared/Config';

const InGameSyncComponent = () => {
    let connected: boolean = false;
    let syncEnabled: boolean = false;
    let gameId: string;

    const reportGameProgress = () => {
        if (!connected || !gameId) {
            return;
        }

        const avatarElement = document.querySelector(StadiaSelectors.USER_AVATAR);
        if (avatarElement) {
            const userId = avatarElement.getAttribute('data-player-id');

            void StadiaPlusDB.updateGameProgress(userId!, gameId!);
        }
    }

    onPageChanged(event => {
        if (!connected) {
            return;
        }

        if (event.page === 'player') {
            gameId = Util.getPlayerGameId();
        }

        if (event.page !== 'player' && event.lastPage === 'player') {
            console.log('report game progress', gameId);
            reportGameProgress();
        }
    });

    onAuthenticated(() => {
        connected = true;
    });

    Config.ENABLE_SYNC.get().then(value => syncEnabled = !!value);
    document.body.addEventListener('beforeunload', reportGameProgress);
}

export default InGameSyncComponent;


