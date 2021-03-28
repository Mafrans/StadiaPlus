import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Theme } from '../../../shared/Theme';
import { CgArrowTopRight } from 'react-icons/cg';
import { FaGoogle } from 'react-icons/fa';
import Container from '../components/Container';
import OnboardPanel from '../components/OnboardPanel';
import StadiaPlusDB from '../../../shared/StadiaPlusDB';
import { useHistory } from 'react-router-dom';
import Logger from '../../../main/src/Logger';

export default function OnboardPage() {
    const history = useHistory();

    return <Container>
        <OnboardPanel
            title={'Stadia, elevated.'}
            body={'Sign in to Stadia+ to automagically sync all your achievements and stats to your profile.'}
            link={{
                icon: <CgArrowTopRight />,
                label: 'More about Stadia+ DB',
                url: ''
            }}
            button={{
                icon: <FaGoogle />,
                label: 'Sign in with Google',
                onClick: async () => {
                    try {
                        await signIn();
                        history.push('/home');
                    }
                    catch (e) {
                        Logger.error(e);
                    }
                }
            }}
        />
    </Container>;
}

async function signIn() {
    await StadiaPlusDB.googleSignIn();
}