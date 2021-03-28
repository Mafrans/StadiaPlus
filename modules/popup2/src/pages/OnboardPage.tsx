import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Theme } from '../../../shared/Theme';
import { CgArrowTopRight, CgGoogle } from 'react-icons/cg';
import Container from '../components/Container';

export default function OnboardPage() {
    return <Container>
        <div>
            <h1>Stadia, elevated.</h1>
            <p>Sign in to Stadia+ to automagically sync all your achievements and stats to your profile.</p>
            <p>
                <a href={''}>More about Stadia+ DB</a>
                <CgArrowTopRight/>
            </p>
            <button><CgGoogle /> Sign in with Google</button>
        </div>
    </Container>;
}