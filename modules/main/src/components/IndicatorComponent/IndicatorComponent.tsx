import React, { ReactNode, useEffect, useState } from 'react';
import { Config } from '../../../../shared/Config';
import { StadiaSelectors } from '../../StadiaSelectors';
import ReactDOM from 'react-dom';
import IndicatorGroup from './components/IndicatorGroup';
import Util from '../../Util';
import { onPageChanged } from '../../events/PageChangeEvent';

type TileQuery = {
    uuid: string
    subId: string
    query: string
}

let inHome = false;
let gameIds: { uuid: string, subId: string }[] = [];

const IndicatorComponent = () => {
    const [tileQueries, setTileQueries] = useState<TileQuery[]>([]);
    const [renderer, setRenderer] = useState<HTMLElement | null>(null);

    const updateTileQueries = (renderer: HTMLElement) => {
        const allTiles = Array.from(renderer.querySelectorAll(StadiaSelectors.GAME_TILE));
        const tileQueries: {uuid: string, subId: string, query: string}[] = [];

        if (allTiles.length === 0) return;

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

        setTileQueries(tileQueries);
    }

    useEffect(() => {
        onPageChanged(async event => {
            if (event.page !== 'home') {
                return;
            }
            gameIds = await Config.GAME_IDS.get() || [];
            inHome = true;

            if (Util.renderer) {
                updateTileQueries(Util.renderer);
                setRenderer(Util.renderer);
            }
        });
    })

    if (tileQueries && renderer) {
        const icons: ReactNode[] = [];

        tileQueries.forEach(entry => {
            const tile = renderer.querySelector(entry.query) as HTMLDivElement;
            if (tile) {
                icons.push(
                    <IndicatorGroup uuid={entry.uuid} tile={tile} />
                );
            }
        });

        if(icons.filter(it => it !== null).length === 0) {
            // If no icons have been added, try again next second.
            setTimeout(() => updateTileQueries(renderer), 1000);
            return null;
        }

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