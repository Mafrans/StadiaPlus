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


export default function HomePage() {
    const [profile, setProfile] = useState<StadiaPlusDB.Profile | null>(null);
    const [syncEnabled, setSyncEnabled] = useState<boolean>(false);
    const history = useHistory();

    const signIn = async () => {
        await StadiaPlusDB.googleSignIn();
        setProfile(await StadiaPlusDB.getOwnProfile());
    };

    const enableSync = async () => {
        await Config.ENABLE_SYNC.set(true);
        setSyncEnabled(true);
    }

    useEffect(() => {
        Config.ENABLE_SYNC.get().then(value => setSyncEnabled(!!value));

        StadiaPlusDB.checkAuthenticated().then(async (authenticated) => {
            if (authenticated) {
                setProfile(await StadiaPlusDB.getOwnProfile());
            }
        })
    }, [])

    const syncPanel = <OnboardPanel
        elevated={true}
        title={'Get in sync'}
        body={'Sync your games with Stadia+ to automagically keep track of all your achievements and stats.'}
        links={[{
            icon: <CgArrowRight />,
            label: 'More about syncing',
            url: '#',
        }]}
        buttons={[{
            icon: <CgSync />,
            label: 'Enable sync',
            onClick: enableSync
        }]}
    />

    const loginPanel = <OnboardPanel
        elevated={true}
        title={'Sign in for more'}
        body={'Sign in for more features, like play tracking and custom profile pictures.'}
        links={[{
            icon: <CgArrowTopRight />,
            label: 'Read more',
            url: '#',
        }]}
        buttons={[{
            icon: <IoLogoGoogle />,
            label: 'Sign in with Google',
            onClick: signIn
        }]}
    />

    const finalPanel = <OnboardPanel
        title={'You\'re all set!'}
        body={`
            Stadia+ is set up and ready to go. Fire up Stadia and start playing!
        `}
        buttons={[{
            label: 'Launch Stadia',
            icon: <CgGames />,
            onClick: () => window.open('https://stadia.google.com')
        }]}
    />

    return <Container>
        { !syncEnabled ?
            ( profile ? syncPanel : loginPanel )
            : finalPanel
         }
        <Hr />
        { profile && <ProfilePanel profile={profile} /> }
        <ButtonGrid>
            <TileButton>
                <CgSupport size={24} />
                Help
            </TileButton>
            <TileButton>
                <CgGift size={24} />
                Donate
            </TileButton>
            <TileButton onClick={() => history.push('/settings')}>
                <CgOptions size={24} />
                Settings
            </TileButton>
        </ButtonGrid>
    </Container>;
}

const Hr = styled.hr`
    ${tw`
        mt-6
    `}
    border: none;
    border-bottom: 1px solid ${Theme.Colors.gray['700']};
`

const ButtonGrid = styled.div`
    ${tw`
        mt-6
        grid gap-3
        grid-cols-3
    `}
`

const TileButton = styled.div.attrs({ role: 'button' })`
    ${tw`
        flex flex-col
        items-center justify-between
        p-5 box-border
        w-full h-24
        rounded-lg
        text-white
        cursor-pointer
    `}
    font-family: Overpass, sans-serif;
    border: solid 2px ${Theme.Colors.gray['700']};
`
