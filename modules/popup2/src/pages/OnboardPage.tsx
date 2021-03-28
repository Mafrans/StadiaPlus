import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Theme } from '../../../shared/Theme';
import { CgArrowTopRight, CgGoogle } from 'react-icons/cg';
import Container from '../components/Container';
import OnboardPanel from '../components/OnboardPanel';

export default function OnboardPage() {
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
                icon: <CgGoogle />,
                label: 'Sign in with Google',
            }}
        />
    </Container>;
}