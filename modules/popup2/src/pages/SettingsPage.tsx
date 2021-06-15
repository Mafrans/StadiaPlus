import React, { useEffect, useState } from 'react';
import Container from '../components/Container';
import {
    CgArrowRight,
    CgArrowTopRight, CgGames,
    CgGift,
    CgOptions,
    CgProfile,
    CgSupport,
    CgSync,
} from 'react-icons/cg';
import OnboardPanel from '../components/OnboardPanel';
import ProfilePanel from '../components/ProfilePanel';
import { StadiaPlusDB } from '../../../shared/StadiaPlusDB';
import Button from '../components/Button';
import { FaPatreon } from 'react-icons/fa';
import tw from 'twin.macro';
import styled from 'styled-components';
import { Theme } from '../../../shared/Theme';
import { IoLogoGoogle } from 'react-icons/io';
import { Config } from '../../../shared/Config';
import Logger from '../../../main/src/Logger';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import SettingsCategory from '../components/SettingsCategory';
import DropdownEntry from '../components/settings/DropdownEntry';
import { StadiaCodec, stadiaCodecs } from '../../../shared/models/StadiaCodec';
import { StadiaResolution, stadiaResolutions } from '../../../shared/models/StadiaResolution';


export default function SettingsPage() {
    return <Container>
        <Header>Settings</Header>

        <SettingsCategory title={'Extension'}>
            <DropdownEntry
                title={'Language'}
                dropdown={{
                    default: 'English',
                    options: ['English', 'Svenska', 'Español'],
                    onChange: () => {}
                }}
            />
        </SettingsCategory>
        
        <SettingsCategory title={'Video Settings'}>
            <DropdownEntry
                title={'Codec'}
                dropdown={{
                    default: () => Config.CODEC.get(),
                    options: stadiaCodecs,
                    onChange: value => Config.CODEC.set(value as StadiaCodec)
                }}
            />
            <DropdownEntry
                title={'Resolution'}
                dropdown={{
                    default: () => Config.RESOLUTION.get(),
                    options: stadiaResolutions,
                    onChange: value => Config.RESOLUTION.set(value as StadiaResolution)
                }}
            />
        </SettingsCategory>
    </Container>;
}