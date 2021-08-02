import React, { useRef, useState } from 'react';
import Container from '../components/Container';
import { Config } from '../../../shared/Config';
import Header from '../components/Header';
import SettingsCategory from '../components/SettingsCategory';
import DropdownEntry from '../components/settings/DropdownEntry';
import { StadiaCodec, stadiaCodecs } from '../../../shared/models/StadiaCodec';
import { StadiaResolution, stadiaResolutions } from '../../../shared/models/StadiaResolution';
import SwitchEntry from '../components/settings/SwitchEntry';
import Button from '../components/Button/Button';
import { FaGoogle } from 'react-icons/fa';
import { asyncEffect } from '../../../main/src/Util';
import StadiaPlusDB from '../../../shared/StadiaPlusDB';
import { useHistory } from 'react-router-dom';
import { CgLogOut } from 'react-icons/cg';

export default function SettingsPage() {
    const [loggedIn, setLoggedIn] = useState<boolean>(false);
    const history = useHistory();

    asyncEffect(async () => {
        setLoggedIn(!(await Config.LOGIN_SKIPPED.get()));
    }, [])

    const signIn = async () => {
        await StadiaPlusDB.googleSignIn();
        await Config.LOGIN_SKIPPED.set(false);
        history.push('/home');
    };

    const signOut = () => {
        void StadiaPlusDB.googleSignOut();
        history.push('/');
    }

    return <Container>
        <Header>Settings</Header>
            <SettingsCategory title={'Account'}>
                { loggedIn ? <>
                    <Button onClick={signOut} type={'link'} icon={<CgLogOut />}>
                        Sign out
                    </Button>
                </> : <>
                    <Button onClick={signIn} type={'link'} icon={<FaGoogle />}>
                        Sign in with Google
                    </Button>
                </> }
            </SettingsCategory>

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