import React, { ReactNode } from 'react';
import AbstractComponent, { DefaultProps, DefaultState } from '../AbstractComponent';
import { Config } from '../../../../shared/Config';
import { StadiaSelectors } from '../../StadiaSelectors';
import ReactDOM from 'react-dom';
import IndicatorGroup from './components/IndicatorGroup';
import StadiaPage from '../../StadiaPage';
import Util from '../../Util';

interface ICodecSelectComponentState extends DefaultState {
    tileQueries: {uuid: string, subId: string, query: string}[];
}

// TODO: This class needs to be cleaned up
export default class IndicatorComponent extends AbstractComponent<DefaultProps, ICodecSelectComponentState> {
    gameIds: { uuid: string, subId: string }[] = [];

    constructor() {
        super({
            name: "Tile Indicator Component",
            useReact: true,
            pageFilter: [ StadiaPage.HOME ]
        });

        this.setState({ tileQueries: [] });
    }

    async onStart() {
        const _gameIds = await Config.GAME_IDS.get();
        if(_gameIds !== null) {
            this.gameIds = _gameIds;
        }

        Util.onRendererChange(renderer => {
            console.log({ renderer });
            this.updateTileQueries(renderer);
        })
    }

    async updateTileQueries(renderer: HTMLElement) {
        const allTiles = Array.from(renderer.querySelectorAll(StadiaSelectors.GAME_TILE));
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
            renderer,
            tileQueries
        }));
    }

    async onUpdate() {}

    render(): null | React.ReactPortal {
        if (!this.state.active || this.state.tileQueries == null) return null;
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