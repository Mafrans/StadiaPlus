import React, { useEffect, useState } from 'react';
import Container from '../components/Container';
import {
    CgArrowRight,
    CgArrowTopRight,
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

const Hr = styled.hr`
  border: none;
  border-bottom: 1px solid ${Theme.Colors.gray['700']};
`


export default function HomePage() {
    const [profile, setProfile] = useState<StadiaPlusDB.Profile | null>(null);

    useEffect(() => {
        StadiaPlusDB.checkAuthenticated().then(async (authenticated) => {
            if (authenticated) {
                setProfile(await StadiaPlusDB.getOwnProfile());
            }
        })
    }, [])



    return <Container>
        <OnboardPanel
            title={'Get in sync'}
            body={'Sync your games with Stadia+ to automagically keep track of all your achievements and stats.'}
            link={{
                icon: <CgArrowRight />,
                label: 'More about syncing',
                url: ''
            }}
            button={{
                icon: <CgSync />,
                label: 'Enable sync',
            }}
        />
        <Hr />
        { profile && <ProfilePanel profile={profile} /> }
        <Button icon={ <FaPatreon /> } type={'outline'} onClick={ async () => await StadiaPlusDB.patreonSignIn() }>
            Connect with Patreon
        </Button>
        <div>
            <button>
                <CgSupport />
                Help
            </button>
            <button>
                <CgGift />
                Donate
            </button>
            <button>
                <CgOptions />
                Settings
            </button>
        </div>
    </Container>;
}