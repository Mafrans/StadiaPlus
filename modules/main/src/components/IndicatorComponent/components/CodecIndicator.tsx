import React, { useState } from 'react';
import Indicator from './Indicator';
import { CgOptions } from 'react-icons/cg';
import { Config } from '../../../../../shared/Config';
import { StadiaCodec } from '../../../../../shared/models/StadiaCodec';

type CodecIndicatorProps = {
    uuid: string;
}

const CodecIndicator = (props: CodecIndicatorProps) => {
    const [value, setValue] = useState<StadiaCodec>('Automatic');

    const setValueFromConfig = async (codecs: {[uuid: string]: StadiaCodec} | null) => {
        if (codecs && codecs.hasOwnProperty(props.uuid)) {
            setValue(codecs[props.uuid] || 'Automatic');
        }
    }

    Config.CODECS.get().then(setValueFromConfig);
    Config.CODECS.addChangeListener(setValueFromConfig);

    return <>
        { value !== 'Automatic' &&
            <Indicator icon={<CgOptions />}>
                {value}
            </Indicator>
        }
    </>
}

export default CodecIndicator;