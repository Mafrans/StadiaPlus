import React, { ReactElement, MouseEvent } from 'react';
import { CgArrowTopRight, CgGoogle } from 'react-icons/cg';
import Container from './Container';
import styled from 'styled-components';
import tw from 'twin.macro';
import Button, { ButtonProps } from './Button';
import { Theme } from '../../../shared/Theme';

interface ButtonData extends ButtonProps {
    label: string
}

type OnboardPanelProps = {
    title: string
    body: string
    elevated?: boolean
    link?: {
        icon?: ReactElement
        label: string
        url?: string
        onClick?: (event: React.MouseEvent) => void
    }
    button?: ButtonData
    altLink?: {
        label: string
        url?: string
        onClick?: (event: React.MouseEvent) => void
    }
}

export default function OnboardPanel(props: OnboardPanelProps) {
    return <Wrapper elevated={props.elevated}>
        <Heading>{ props.title }</Heading>
        <Paragraph>{ props.body }</Paragraph>

        { props.link && <Link>
            <Anchor
                href={props.link.url || '#'}
                onClick={props.link?.onClick}
            >
                {props.link.label}
            </Anchor>
            { props.link.icon }
        </Link> }

        { props.button && <ButtonWrapper>
            <Button icon={ props.button.icon } onClick={ props.button.onClick }>
                { props.button.label }
            </Button>
        </ButtonWrapper> }

        { props.altLink && <AltLink>
            <Anchor
                href={props.altLink.url || '#'}
                onClick={props.altLink?.onClick}
            >
                {props.altLink.label}
            </Anchor>
        </AltLink> }
    </Wrapper>;
}

const Wrapper = styled.div<{elevated?: boolean}>`
    ${tw`
        py-4
        text-white
        rounded-lg
    `}
    ${props => props.elevated && tw` 
        px-4
    `}
    ${props => props.elevated && `
        background-color: ${Theme.Colors.gray['800']};
    `}
    font-family: Overpass, sans-serif;
    min-width: 20rem;
`

const Heading = styled.h1(tw`
    text-2xl
    font-semibold
`)

const Paragraph = styled.p(tw`
    mt-4
    text-base
    font-light
`)

const Link = styled.p`
    ${tw`
        flex
        items-center
        mt-4
        text-base
        text-white
    `}
`

const AltLink = styled.p`
    ${tw`
        m-1
        text-sm
        text-white
        opacity-50
    `}
`

const Anchor = styled.a`
    ${tw`
        mt-1
        mr-1
        text-white
        font-light
    `}
`

const ButtonWrapper = styled.div`
    ${tw`
        mt-4
    `}
`
