import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Theme } from '../../../shared/Theme';
import { CgArrowRight, CgArrowTopRight, CgSync } from 'react-icons/cg';
import { FaGoogle } from 'react-icons/fa';
import Container from '../components/Container';
import OnboardPanel from '../components/OnboardPanel';
import { StadiaPlusDB } from '../../../shared/StadiaPlusDB';
import { useHistory } from 'react-router-dom';
import Logger from '../../../main/src/Logger';
import set = chrome.cookies.set;
import MDSpinner from 'react-md-spinner';


export default function OnboardPage() {
    const history = useHistory();
    const [ loaded, setLoaded ] = useState(false);
    const [ error, setError ] = useState<string | null>(null);

    const signIn = async () => {
        try {
            await StadiaPlusDB.googleSignIn();
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

    const checkAuthenticated = async () => {
        setLoaded(false);
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
        link={{
            icon: <CgSync />,
            label: 'Try again',
            onClick: () => { void checkAuthenticated() }
        }}
    />

    const onboardPanel = <OnboardPanel
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
            onClick: signIn
        }}
    />

    return <Container>
        { loaded
            ? error ? errorPanel : onboardPanel
            : <LoaderContainer>
                <MDSpinner singleColor={'#ffffff'}>Loading...</MDSpinner>
            </LoaderContainer>
        }
    </Container>;
}

const LoaderContainer = styled.div`
    ${tw`
        p-4
    `}
`
