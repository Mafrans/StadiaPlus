import React from 'react';
import AbstractComponent, { DefaultProps, DefaultState } from './AbstractComponent';
import StadiaPlusDB from '../../../shared/StadiaPlusDB';
import { Config } from '../../../shared/Config';
import { PageQueryType } from '../../../shared/models/PageQueryType';
import { StadiaClasses } from '../StadiaClasses';

export default class CodecSelectComponent extends AbstractComponent<DefaultProps, DefaultState> {
    tiles: HTMLDivElement[] = [];
    heroTile: HTMLDivElement | null = null;

    constructor() {
        super({ name: "Codec Select Component" });
    }

    async onStart() {
        const gameIds = await Config.GAME_IDS.get();
        const allTiles = Array.from(document.querySelectorAll(`.${StadiaClasses.GAME_TILE}`));

        if (allTiles.length === 0) return;

        gameIds?.forEach(game => {
            const tile = allTiles.find(it => {
                return it.getAttribute('jsdata')?.split(';')[1] === game.subId;
            }) as HTMLDivElement;

            if (tile !== null && tile !== undefined) {
                this.tiles.push(tile);
            }
        })

        this.heroTile = document.querySelector(`.${StadiaClasses.GAME_TILE_HERO}`);
    }

    async onUpdate() {

    }
}