import React from 'react';
import { Config } from '../../../shared/Config';
import { StadiaResolution } from '../../../shared/models/StadiaResolution';
import Logger from '../../../shared/Logger';
import Util from '../Util';
import { onPageChanged } from '../events/PageChangeEvent';


const ResolutionComponent = () => {
    onPageChanged(async event => {
        if (event.page !== 'player') {
            return;
        }

        const gameId = Util.getPlayerGameId();
        const resolution = await Config.RESOLUTION.get() || 'Automatic';

        let width: number = 0;
        let height: number = 0;

        switch (resolution) {
            case 'Full HD':
                width = 1920;
                height = 1080;
                break;

            case 'QHD':
                width = 2560;
                height = 1440;
                break;

            case '4K':
                width = 3840;
                height = 2160;
                break;
        }

        if (resolution !== 'Automatic') {
            Util.desandbox({
                availWidth: width,
                width: width,
                availHeight: height,
                height: height,
                colorDepth: 48
            }, { name: 'screen' });
        }

        Logger.info(`Using resolution '${resolution}' (${width}x${height})`);
    });
}

export default ResolutionComponent;