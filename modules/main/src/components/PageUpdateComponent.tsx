import React from 'react';
import AbstractComponent, { DefaultProps, DefaultState } from './AbstractComponent';
import ReactComponent from '../decorators/@ReactComponent';
import DBProfile from '../../../shared/models/DBProfile';
import DBGame from '../../../shared/models/DBGame';
import { Config } from '../../../shared/Config';
import StadiaPlusDB from '../../../shared/StadiaPlusDB';
import ReactDOM from 'react-dom';
import { PageQueryType } from '../../../shared/models/PageQueryType';
import Logger from '../Logger';

interface GameUpdateComponentState extends DefaultState {
    finished: boolean
    progress: number
    goal: number
}

@ReactComponent
export default class PageUpdateComponent extends AbstractComponent<DefaultProps, GameUpdateComponentState> {
    remainingIds: string[] = [];
    active: boolean = true;
    cooldown: boolean = false;
    userId: string | null = null;
    profile: DBProfile = new DBProfile({});

    constructor() {
        super({ name: "Page Update Component" });
        this.setState(() => ({ finished: false }));
    }

    async onStart() {
        const url: URL = new URL(location.href);
        const pageQueryType: PageQueryType = parseInt(url.searchParams.get('pqt') as string)

        if (pageQueryType !== PageQueryType.UPDATE) {
            this.active = false;
            return;
        }

        const profile = await StadiaPlusDB.getOwnProfile();
        this.profile = profile !== null ? new DBProfile(profile) : this.profile

        const remainingIds = await Config.GAME_UPDATES.get();
        this.remainingIds = remainingIds !== null ? remainingIds : [];

        this.setState(() => ({
            goal: this.remainingIds.length
        }))

        // For whatever reason, this HAS to be placed below any `await` calls
        this.userId = document.querySelector('.ksZYgc.VGZcUb')!.getAttribute('data-player-id');

        document.querySelectorAll('body>*:not(#stadiaplus-root)').forEach(element => element.remove());

        // After some experimentation, it seems like 3000ms is the optimal interval for updating games.
        //
        // It's fast enough to update games in somewhat of an efficient fashion,
        // but slow enough for the user not to get stuck in the ratelimit.
        setInterval(this.nextGame.bind(this), 3000)
    }

    async nextGame() {
        if (!this.active || this.userId === null) return;

        if (this.remainingIds.length === 0) {
            await StadiaPlusDB.updateDBProfile(this.profile);
            this.setState(() => ({ finished: true }));
            console.log('finished');
            this.active = false;
        }
        else if (!this.cooldown) {
            const gameId = this.remainingIds.pop() as string;
            await this.profile.fetchGame(this.userId, gameId);

            this.setState(state => ({
                progress: state.goal - this.remainingIds.length
            }))
        }
    }

    render(): null | React.ReactPortal {
        if(!this.active) return null;

        return ReactDOM.createPortal(
            <div>
                <h1>{this.state.finished ? 'Finished!' : 'Working...'}</h1>
            </div>,
            document.getElementById('stadiaplus-root')!,
        );
    }
}


