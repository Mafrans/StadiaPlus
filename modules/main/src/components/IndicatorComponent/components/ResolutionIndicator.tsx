import React, { useState } from 'react';
import Indicator from './Indicator';
import { CgScreen } from 'react-icons/cg';
import { Config } from '../../../../../shared/Config';
import { StadiaResolution } from '../../../../../shared/models/StadiaResolution';

type ResolutionIndicatorProps = {
    uuid: string;
}

const ResolutionIndicator = (props: ResolutionIndicatorProps) => {
    const [value, setValue] = useState<StadiaResolution>('Automatic');

    const setValueFromConfig = async (resolution: {[uuid: string]: StadiaResolution} | null) => {
        if (resolution && resolution.hasOwnProperty(props.uuid)) {
            setValue(resolution[props.uuid] || 'Automatic');
        }
    }

    Config.RESOLUTIONS.get().then(setValueFromConfig);
    Config.RESOLUTIONS.addChangeListener(setValueFromConfig);

    return <>
        { value !== 'Automatic' &&
            <Indicator icon={<CgScreen />}>
                {value}
            </Indicator>
        }
    </>
}

export default ResolutionIndicator;