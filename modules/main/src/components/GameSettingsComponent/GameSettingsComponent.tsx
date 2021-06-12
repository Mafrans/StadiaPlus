import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { stadiaCodecs, StadiaCodec } from '../../../../shared/models/StadiaCodec';
import {  stadiaResolutions, StadiaResolution } from '../../../../shared/models/StadiaResolution';
import { Config } from '../../../../shared/Config';
import SettingsButton from './components/SettingsButton';
import SettingsArea from './components/SettingsArea';
import { onPageChanged } from '../../events/PageChangeEvent';

const GameSettingsComponent = () => {
    const [visible, setVisible] = useState<boolean>(false);

    return <>
        <SettingsButton onClick={() => setVisible(!visible)} active={visible} />
        <SettingsArea
            visible={visible}
            onClose={() => setVisible(false)}
            onCodecChange={value => void Config.CODEC.set(value)}
            onResolutionChange={value => void Config.RESOLUTION.set(value)}
        />
    </>;
}

export default GameSettingsComponent;