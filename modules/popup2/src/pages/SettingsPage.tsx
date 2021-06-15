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


export default function SettingsPage() {
    const [profile, setProfile] = useState<StadiaPlusDB.Profile | null>(null);
    const [syncEnabled, setSyncEnabled] = useState<boolean>(false);

    return <Container>
        <Header>Settings</Header>

        <SettingsCategory title={'Extension'}>
            test
        </SettingsCategory>
    </Container>;
}