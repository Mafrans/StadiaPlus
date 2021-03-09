import React, { ReactNode } from 'react';
import AbstractComponent, { DefaultProps, DefaultState } from '../AbstractComponent';
import { Config } from '../../../../shared/Config';
import { StadiaSelectors } from '../../StadiaSelectors';
import ReactComponent from '../../decorators/@ReactComponent';
import ReactDOM from 'react-dom';
import IndicatorGroup from './components/IndicatorGroup';
import PageFilter from '../../decorators/@PageFilter';
import StadiaPage from '../../StadiaPage';

interface ICodecSelectComponentState extends DefaultState {
    tileQueries: {uuid: string, subId: string, query: string}[];
}

// TODO: This class needs to be cleaned up

@PageFilter([ StadiaPage.HOME ])
@ReactComponent
export default class IndicatorComponent extends AbstractComponent<DefaultProps, ICodecSelectComponentState> {
    gameIds: { uuid: string, subId: string }[] = [];

    constructor() {
        super({ name: "Game Tile Component" });
        this.state = {
            renderer: null,
            tileQueries: [],
        }
    }

    async onStart() {
        const _gameIds = await Config.GAME_IDS.get();
        if(_gameIds !== null) {
            this.gameIds = _gameIds;
            await this.updateRenderer();
            await this.updateTileQueries();
        }
    }

    async updateTileQueries() {
        if(this.state.renderer === null) return;

        const allTiles = Array.from(this.state.renderer.querySelectorAll(StadiaSelectors.GAME_TILE));
        const tileQueries: {uuid: string, subId: string, query: string}[] = [];

        if (allTiles.length === 0) return;

        for (const game of this.gameIds) {
            const tile = allTiles.find(it => {
                return it.getAttribute('jsdata')?.split(';')[1] === game.subId;
            }) as HTMLDivElement;

            if (tile !== null && tile !== undefined) {
                tileQueries.push({
                    uuid: game.uuid,
                    subId: game.subId,
                    query: `${StadiaSelectors.GAME_TILE}[jsdata="${tile.getAttribute('jsdata')}"]`
                });
            }
        }

        this.setState(() => ({
            tileQueries
        }));
    }

    async onUpdate() {
        await this.updateRenderer();
    }

    render(): null | React.ReactPortal {
        if (!this.state.active) return null;
        const icons: ReactNode[] = [];

        this.state.tileQueries.forEach(entry => {
            const tile = this.state.renderer?.querySelector(entry.query) as HTMLDivElement;
            if (tile === null || tile === undefined) return;

            icons.push(
                <IndicatorGroup uuid={entry.uuid} tile={tile} />
            );
        });

        if(icons.filter(it => it !== null).length === 0) {
            // If no icons have been added, try again next second.
            setTimeout(this.updateTileQueries.bind(this), 1000);
            return null;
        }

        return ReactDOM.createPortal(
            <div>
                {
                    icons
                }
            </div>,
            document.getElementById('stadiaplus-root')!,
        );
    }
}