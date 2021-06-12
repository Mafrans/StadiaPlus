import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { stadiaCodecs, StadiaCodec } from '../../../../shared/models/StadiaCodec';
import {  stadiaResolutions, StadiaResolution } from '../../../../shared/models/StadiaResolution';
import { Config } from '../../../../shared/Config';
import SettingsButton from './components/SettingsButton';
import SettingsArea from './components/SettingsArea';

let uuid: string | null = null;
const GameSettingsComponent = () => {
    const [codec, setCodec] = useState<StadiaCodec>('Automatic');
    const [resolution, setResolution] = useState<StadiaResolution>('Automatic');
    const [visible, setVisible] = useState<boolean>(false);

    const changeCodec = async (value: StadiaCodec) => {
        void Config.CODEC.set(value);
        setCodec(value);
    }

    const changeResolution = async (value: StadiaResolution) => {
        void Config.RESOLUTION.set(value);
        setResolution(value);
    }

    return <>
        <SettingsButton onClick={() => setVisible(!visible)} active={visible} />
        <SettingsArea
            visible={visible}
            onClose={() => setVisible(false)}
            onCodecChange={changeCodec}
            onResolutionChange={changeResolution}
        />
    </>;
}

export default GameSettingsComponent;