import React, { useState } from 'react';
import Indicator from './Indicator';
import { CgScreen } from 'react-icons/cg';
import { Config } from '../../../../../shared/Config';
import StadiaResolution from '../../../../../shared/models/StadiaResolution';

type ResolutionIndicatorProps = {
    uuid: string;
}

export default function ResolutionIndicator(props: ResolutionIndicatorProps) {

    const [value, setValue] = useState(StadiaResolution.AUTOMATIC);

    const setValueFromConfig = async (resolution: {[uuid: string]: StadiaResolution} | null) => {
        if (resolution && resolution.hasOwnProperty(props.uuid)) {
            setValue(resolution[props.uuid] || StadiaResolution.AUTOMATIC);
        }
    }

    Config.RESOLUTIONS.get().then(setValueFromConfig);
    Config.RESOLUTIONS.addChangeListener(setValueFromConfig);

    return <>
        { value.name !== StadiaResolution.AUTOMATIC.name &&
            <Indicator icon={<CgScreen />}>
                {value.name}
            </Indicator>
        }
    </>
}