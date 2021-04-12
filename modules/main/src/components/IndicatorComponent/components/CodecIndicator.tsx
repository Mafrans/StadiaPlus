import React, { useState } from 'react';
import Indicator from './Indicator';
import { CgOptions } from 'react-icons/cg';
import StadiaCodec from '../../../../../shared/models/StadiaCodec';
import { Config } from '../../../../../shared/Config';

type CodecIndicatorProps = {
    uuid: string;
}

const CodecIndicator = (props: CodecIndicatorProps) => {
    const [value, setValue] = useState(StadiaCodec.AUTOMATIC);

    const setValueFromConfig = async (codecs: {[uuid: string]: StadiaCodec} | null) => {
        if (codecs && codecs.hasOwnProperty(props.uuid)) {
            setValue(codecs[props.uuid] || StadiaCodec.AUTOMATIC);
        }
    }

    Config.CODECS.get().then(setValueFromConfig);
    Config.CODECS.addChangeListener(setValueFromConfig);

    return <>
        { value.name !== StadiaCodec.AUTOMATIC.name &&
            <Indicator icon={<CgOptions />}>
                {value.name}
            </Indicator>
        }
    </>
}

export default CodecIndicator;