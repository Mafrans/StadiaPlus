import React from 'react';
import AbstractComponent, { DefaultProps, DefaultState } from './AbstractComponent';
import StadiaPage from '../StadiaPage';
import { Config } from '../../../shared/Config';
import StadiaCodec from '../../../shared/models/StadiaCodec';
import StadiaResolution from '../../../shared/models/StadiaResolution';
import Logger from '../Logger';
import Util from '../Util';

export default class ResolutionComponent extends AbstractComponent<DefaultProps, DefaultState> {
    constructor() {
        super({
            name: "Resolution Component",
            pageFilter: [ StadiaPage.PLAYER ]
        });
    }

    async onStart() {
        const resolutions = await Config.RESOLUTIONS.get() || {};
        const resolution = resolutions[this.parsePlayerUUID()] || StadiaResolution.AUTOMATIC;

        Logger.info(`Using resolution '${resolution.name}'`);

        let width: number = 0;
        let height: number = 0;

        switch (resolution.name) {
            case StadiaResolution.FULL_HD.name:
                width = 1920;
                height = 1080;
                break;

            case StadiaResolution.QHD.name:
                width = 2560;
                height = 1440;
                break;

            case StadiaResolution.ULTRA_HD.name:
                width = 3840;
                height = 2160;
                break;
        }

        if (resolution.name !== StadiaResolution.AUTOMATIC.name) {
            Util.desandbox({
                availWidth: width,
                width: width,
                availHeight: height,
                height: height,
                colorDepth: 48
            }, { name: 'screen' });
        }
    }

    parsePlayerUUID() {
        // Each UUID is 36 characters long
        return location.pathname.substring('/player/'.length, '/player/'.length + 36)
    }

    async onUpdate() {}
}