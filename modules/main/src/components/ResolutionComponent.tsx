import React  from 'react';
import { Config } from '../../../shared/Config';
import Logger from '../../../shared/Logger';
import { asyncEffect, desandbox, getPlayerGameId } from '../Util';
import { stateStore } from '../state/StateStore';
import { observer } from 'mobx-react';

const ResolutionComponent = () => {
    const { page } = stateStore;

    asyncEffect(async () => {
        if (page !== 'player') {
            return;
        }

        const gameId = getPlayerGameId();
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
            desandbox(() => {
                Object.defineProperties(window.screen, {
                    availWidth: {
                        value: width,
                        configurable: true
                    },
                    width: {
                        value: width,
                        configurable: true
                    },
                    availHeight: {
                        value: height,
                        configurable: true
                    },
                    height: {
                        value: height,
                        configurable: true
                    },
                    colorDepth: {
                        value: 48,
                        configurable: true
                    },
                })
            }, { immediate: true });
        }

        Logger.info(`Using resolution '${resolution}' (${width}x${height})`);
    }, [page])

    return null;
}

export default observer(ResolutionComponent);