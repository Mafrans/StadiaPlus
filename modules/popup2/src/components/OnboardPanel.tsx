import React, { ReactElement, MouseEvent } from 'react';
import { CgArrowTopRight, CgGoogle } from 'react-icons/cg';
import Container from './Container';
import styled from 'styled-components';
import tw from 'twin.macro';
import Button, { ButtonProps } from './Button';

interface ButtonData extends ButtonProps {
    label: string
}

type OnboardPanelProps = {
    title: string
    body: string
    link?: {
        icon?: ReactElement
        label: string
        url: string
    }
    button: ButtonData
}

export default function OnboardPanel(props: OnboardPanelProps) {
    return <Wrapper>
        <Heading>{ props.title }</Heading>
        <Paragraph>{ props.body }</Paragraph>

        { props.link && <Link>
            <a href={props.link.url}>{props.link.label}</a>
            { props.link.icon }
        </Link> }

        <Button icon={ props.button.icon } onClick={ props.button.onClick }>
            { props.button.label }
        </Button>
    </Wrapper>;
}

const Wrapper = styled.div`
    font-family: Overpass, sans-serif;
    ${tw`
        py-4
        text-white
    `}
`

const Heading = styled.h1(tw`
    mb-4
    text-2xl
    font-semibold
`)

const Paragraph = styled.p(tw`
    mb-4
    text-base
    font-light
`)

const Link = styled.p`
    ${tw`
        flex
        items-center
        mb-4
        text-xl
        text-white
    `}
    
    >a {
        ${tw`
            mt-1
            mr-1
            text-white
            text-base
            font-light
        `}
    }
`