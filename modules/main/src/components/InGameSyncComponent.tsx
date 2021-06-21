import React from 'react';
import { StadiaPlusDB } from '../../../shared/StadiaPlusDB';
import Util from '../Util';
import { StadiaSelectors } from '../StadiaSelectors';
import { onAuthenticated } from '../events/AuthenticatedEvent';
import { onPageChanged } from '../events/PageChangeEvent';

const InGameSyncComponent = () => {
    let connected: boolean = false;
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
            reportGameProgress();
        }
    });

    onAuthenticated(() => {
        connected = true;
    });

    document.body.addEventListener('beforeunload', reportGameProgress);
}

export default InGameSyncComponent;


