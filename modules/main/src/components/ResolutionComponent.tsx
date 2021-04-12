import React from 'react';
import AbstractComponent, { DefaultProps, DefaultState } from './AbstractComponent';
import { Config } from '../../../shared/Config';
import StadiaCodec from '../../../shared/models/StadiaCodec';
import StadiaResolution from '../../../shared/models/StadiaResolution';
import Logger from '../Logger';
import Util from '../Util';
import { onPageChanged } from '../events/PageChangeEvent';


const ResolutionComponent = () => {
    onPageChanged(async event => {
        if (event.page !== 'player') {
            return;
        }

        const gameId = Util.getPlayerGameId();
        const resolutions = await Config.RESOLUTIONS.get() || {};
        const resolution = resolutions[gameId] || StadiaResolution.AUTOMATIC;

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

        Logger.info(`Using resolution '${resolution.name}' (${width}x${height})`);
    })
}

export default ResolutionComponent;