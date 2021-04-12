import React, { ReactNode, useEffect, useState } from 'react';
import { Config } from '../../../../shared/Config';
import { StadiaSelectors } from '../../StadiaSelectors';
import ReactDOM from 'react-dom';
import IndicatorGroup from './components/IndicatorGroup';
import Util from '../../Util';
import { onPageChanged } from '../../events/PageChangeEvent';
import { onRendererChange } from '../../events/RendererChangeEvent';

type TileQuery = {
    uuid: string
    subId: string
    query: string
}

let inHome = false;
let gameIds: { uuid: string, subId: string }[] = [];

const IndicatorComponent = () => {
    const [tileQueries, setTileQueries] = useState<TileQuery[]>([]);

    const updateTileQueries = () => {
        if (!Util.renderer) {
            return;
        }

        const allTiles = Array.from(Util.renderer.querySelectorAll(StadiaSelectors.GAME_TILE));
        const tileQueries: {uuid: string, subId: string, query: string}[] = [];

        console.log({allTiles, gameIds});

        if (allTiles.length === 0) {
            setTimeout(() => updateTileQueries(), 1000);
            return;
        }

        for (const game of gameIds) {
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

        console.log({ tileQueries });

        setTileQueries(tileQueries);
    }

    useEffect(() => {
        onPageChanged(async event => {
            if (event.page !== 'home') {
                return;
            }
            console.log('Quick! Indicate')
            gameIds = await Config.GAME_IDS.get() || [];
            inHome = true;

            console.log(gameIds, Util.renderer)
            if (Util.renderer) {
                console.log('yes, please update tile queries');
                updateTileQueries();
            }
        });
    })

    if (tileQueries && Util.renderer) {
        const icons: ReactNode[] = [];

        tileQueries.forEach(entry => {
            const tile = Util.renderer!.querySelector(entry.query) as HTMLDivElement;
            if (tile) {
                icons.push(
                    <IndicatorGroup uuid={entry.uuid} tile={tile} />
                );
            }
        });

        const root = document.getElementById('stadiaplus-root');
        if (root) {
            return ReactDOM.createPortal(
                <div>{ icons }</div>,
                root,
            );
        }
    }
    return null;
}

export default IndicatorComponent;