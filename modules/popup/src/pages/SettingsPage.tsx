import React from 'react';
import Container from '../components/Container';
import { Config } from '../../../shared/Config';
import Header from '../components/Header';
import SettingsCategory from '../components/SettingsCategory';
import DropdownEntry from '../components/settings/DropdownEntry';
import { StadiaCodec, stadiaCodecs } from '../../../shared/models/StadiaCodec';
import { StadiaResolution, stadiaResolutions } from '../../../shared/models/StadiaResolution';
import SwitchEntry from '../components/settings/SwitchEntry';


export default function SettingsPage() {
    return <Container>
        <Header>Settings</Header>

        <SettingsCategory title={'Extension'}>
            <DropdownEntry
                title={'Language'}
                dropdown={{
                    value: 'English',
                    options: ['English'],
                    onChange: () => {}
                }}
            />
        </SettingsCategory>
        
        <SettingsCategory title={'Video Settings'}>
            <DropdownEntry
                title={'Codec'}
                dropdown={{
                    value: () => Config.CODEC.get(),
                    options: stadiaCodecs,
                    onChange: value => Config.CODEC.set(value as StadiaCodec)
                }}
            />
            <DropdownEntry
                title={'Resolution'}
                dropdown={{
                    value: () => Config.RESOLUTION.get(),
                    options: stadiaResolutions,
                    onChange: value => Config.RESOLUTION.set(value as StadiaResolution)
                }}
            />
        </SettingsCategory>

        <SettingsCategory title={'Developer'}>
            <SwitchEntry
                switch={{
                    value: () => Config.DEBUG_LOGGING.get(),
                    onChange: value => Config.DEBUG_LOGGING.set(value)
                }}
                title={'Debug Logging'}
            />
        </SettingsCategory>
    </Container>;
}