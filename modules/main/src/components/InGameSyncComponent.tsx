import React from 'react';
import AbstractComponent, { DefaultProps, DefaultState } from './AbstractComponent';
import StadiaPage from '../StadiaPage';
import { StadiaPlusDB } from '../../../shared/StadiaPlusDB';
import Util from '../Util';
import { StadiaSelectors } from '../StadiaSelectors';

export default class InGameSyncComponent extends AbstractComponent<DefaultProps, DefaultState> {
    connected: boolean = false;
    gameId?: string;

    constructor() {
        super({
            name: "In Game Sync Component",
            pageFilter: [ StadiaPage.PLAYER ]
        });
    }

    async onConnect() {
        this.connected = true;
        if(this.state.active) {
            this.onStart();
        }
    }

    async onStart() {
        if (!this.connected) {
            return;
        }

        this.gameId = location.pathname.split('/')[2];
        console.log(this.connected);
        console.log(this.gameId);
        document.body.addEventListener('beforeunload', this.reportGameProgress);
    }

    async onStop() {
        console.log('stopping...');
        document.body.removeEventListener('beforeunload', this.reportGameProgress);
        void this.reportGameProgress();
    }

    async reportGameProgress() {
        console.log(0);
        const avatarElement = document.querySelector(StadiaSelectors.USER_AVATAR);
        if (!avatarElement) {
            return;
        }

        const userId = avatarElement.getAttribute('data-player-id');
        console.log(`Reporting progress for ${userId} in game ${this.gameId}`);
        await StadiaPlusDB.updateGameProgress(userId!, this.gameId!);
    }
}


