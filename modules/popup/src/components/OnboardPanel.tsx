import React, { ReactElement } from 'react';
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
    links?: {
        icon?: ReactElement
        label: string
        url?: string
        onClick?: (event: React.MouseEvent) => void
        color?: string
    }[]
    buttons?: ButtonData[]
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

        <List>
            { props.links && props.links.map((link, i) =>
                <Link style={{ color: link.color }}>
                    <Anchor
                        key={i}
                        style={{ color: link.color }}
                        href={link.url}
                        onClick={link?.onClick}
                    >
                        {link.label}
                    </Anchor>
                    { link.icon }
                </Link>
            ) }
        </List>

        <List>
            { props.buttons && props.buttons.map((button, i) =>
                <ButtonWrapper>
                    <Button key={i} {...button} >
                        { button.label }
                    </Button>
                </ButtonWrapper>
            ) }
        </List>

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
        my-4
        text-white
        rounded-lg
    `}
    ${props => props.elevated && tw` 
        my-0
        p-4
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

const List = styled.div`
    ${tw`
        mt-4
    `}
`

const Link = styled.p`
    ${tw`
        flex
        items-center
        mt-1
        text-base
        text-white
        cursor-pointer
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
        mt-1
    `}
`
