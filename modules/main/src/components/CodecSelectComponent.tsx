import React, { ReactNode } from 'react';
import AbstractComponent, { DefaultProps, DefaultState } from './AbstractComponent';
import StadiaPlusDB from '../../../shared/StadiaPlusDB';
import { Config } from '../../../shared/Config';
import { PageQueryType } from '../../../shared/models/PageQueryType';
import { StadiaClasses } from '../StadiaClasses';
import ReactComponent from '../decorators/@ReactComponent';
import ReactDOM from 'react-dom';
import GameCard from './subcomponents/GameCard';
import GameTileIcon from './subcomponents/GameTileIcon';

interface ICodecSelectComponentState extends DefaultState {
    tileQueries: {uuid: string, subId: string, query: string}[];
}

@ReactComponent
export default class CodecSelectComponent extends AbstractComponent<DefaultProps, ICodecSelectComponentState> {
    gameIds: { uuid: string, subId: string }[] = [];

    constructor() {
        super({ name: "Codec Select Component" });
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
            await this.updateQueries();
        }
    }

    async updateQueries() {
        if(this.state.renderer === null) return;

        const allTiles = Array.from(this.state.renderer.querySelectorAll(`.${StadiaClasses.GAME_TILE}`));
        const tileQueries: {uuid: string, subId: string, query: string}[] = [];

        if (allTiles.length === 0) return;

        this.gameIds?.forEach(game => {
            const tile = allTiles.find(it => {
                return it.getAttribute('jsdata')?.split(';')[1] === game.subId;
            }) as HTMLDivElement;

            if (tile !== null && tile !== undefined) {
                tileQueries.push({
                    uuid: game.uuid,
                    subId: game.subId,
                    query: `.${StadiaClasses.GAME_TILE}[jsdata="${tile.getAttribute('jsdata')}"]`
                });
            }
        })

        this.setState(() => ({
            tileQueries
        }));
    }

    async onUpdate() {
        await this.updateRenderer();
    }

    render(): null | React.ReactPortal {
        console.log(this.state.tileQueries);

        const icons: ReactNode[] = [];

        this.state.tileQueries.forEach(entry => {
            console.log({ entry, renderer: this.state.renderer });
            const tile = this.state.renderer?.querySelector(entry.query) as HTMLDivElement;
            console.log({ tile });
            if (tile === null || tile === undefined) return;

            icons.push(
                <GameTileIcon tile={tile}>
                    {entry.uuid}
                </GameTileIcon>
            );
        });

        if(icons.filter(it => it !== null).length === 0) {
            setTimeout(this.updateQueries.bind(this), 1000);
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