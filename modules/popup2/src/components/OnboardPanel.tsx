import React, { ReactElement, MouseEvent } from 'react';
import { CgArrowTopRight, CgGoogle } from 'react-icons/cg';
import Container from './Container';
import styled from 'styled-components';
import tw from 'twin.macro';

type OnboardPanelProps = {
    title: string
    body: string
    link: {
        icon?: ReactElement
        label: string
        url: string
    }
    button: {
        icon?: ReactElement
        label: string
        onClick?: (event: MouseEvent) => void
    }
}

export default function OnboardPanel(props: OnboardPanelProps) {
    return <Wrapper>
        <Heading>{ props.title }</Heading>
        <p>{ props.body }</p>
        <p>
            <a href={ props.link.url }>{ props.link.label }</a>
            { props.link.icon }
        </p>
        <button onClick={ props.button.onClick }>
            { props.button.icon }
            { props.button.label }
        </button>
    </Wrapper>;
}

const Wrapper = styled.div`
    font-family: Overpass, sans-serif;
    ${tw`
        text-white
    `}
`
const Heading = styled.h1(tw`
    text-2xl
    font-semibold
`)