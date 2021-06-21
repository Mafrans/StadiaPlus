import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Theme } from '../../../shared/Theme';
import { CgArrowRight, CgArrowTopRight, CgClose, CgGoogle, CgSync } from 'react-icons/cg';
import { FaGoogle } from 'react-icons/fa';
import Container from '../components/Container';
import OnboardPanel from '../components/OnboardPanel';
import { StadiaPlusDB } from '../../../shared/StadiaPlusDB';
import { useHistory } from 'react-router-dom';
import Logger from '../../../main/src/Logger';
import set = chrome.cookies.set;
import MDSpinner from 'react-md-spinner';
import StadiaPlusLogo from '../../../shared/resources/components/StadiaPlusLogo';
import { IoLogoGoogle } from 'react-icons/io';
import { Config } from '../../../shared/Config';


export default function OnboardPage() {
    const history = useHistory();
    const [ loaded, setLoaded ] = useState(false);
    const [ error, setError ] = useState<string | null>(null);

    const signIn = async () => {
        try {
            await StadiaPlusDB.googleSignIn();
            history.push('/home');
        }
        catch (e) {
            Logger.error(e);

            setError(
                'Something went wrong when logging in, try ' +
                'again and notify the developer if you get this ' +
                'issue repeatedly.'
            );
        }
    };

    const skipSignIn = async () => {
        await Config.LOGIN_SKIPPED.set(true);
        history.push('/home');
    }

    const checkAuthenticated = async () => {
        setLoaded(false);

        if (await Config.LOGIN_SKIPPED.get()) {
            history.push('/home');
        }

        try {
            const authenticated = await StadiaPlusDB.checkAuthenticated();
            if (authenticated) {
                history.push('/home');
            }
        }
        catch (e) {
            setError(
                'Something went wrong when connecting ' +
                'to our servers, try again and notify the ' +
                'developer if you get this issue repeatedly.'
            );
        }
        setLoaded(true);
    }

    useEffect(() => void checkAuthenticated(), [])

    const errorPanel = <OnboardPanel
        title={'Uh oh'}
        body={error!}
        links={[{
            icon: <CgSync />,
            label: 'Try again',
            url: '#',
            onClick: checkAuthenticated
        }, {
            icon: <CgArrowRight />,
            label: 'Use Stadia+ offline',
            color: 'rgba(255, 255, 255, 0.5)',
            onClick: skipSignIn
        }]}
    />

    const onboardPanel = <OnboardPanel
        title={'Stadia, elevated'}
        body={'Sign in to Stadia+ to automagically sync all your achievements and stats to your profile.'}
        links={[{
            icon: <CgArrowTopRight />,
            label: 'More about syncing',
            url: '#',
        }]}
        buttons={[{
            icon: <IoLogoGoogle />,
            label: 'Sign in with Google',
            onClick: signIn
        }]}
        altLink={{
            label: `No thanks, I'll sign in later`,
            onClick: skipSignIn
        }}
    />

    return <Container>
        <LogoWrapper>
            <StadiaPlusLogo/>
        </LogoWrapper>
        <PanelWrapper>
            { loaded
                ? error ? errorPanel : onboardPanel
                : <LoaderWrapper>
                    <MDSpinner singleColor={'#ffffff'}>Loading...</MDSpinner>
                </LoaderWrapper>
            }
        </PanelWrapper>
    </Container>;
}

const LogoWrapper = styled.div`
    ${tw`
        flex
        justify-center
    `}
`

const PanelWrapper = styled.div`
    ${tw`
        my-6
    `}
`


const LoaderWrapper = styled.div`
    ${tw`
        p-4
    `}
`
