import React, { ReactElement, MouseEvent, PropsWithChildren } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Theme } from '../../../shared/Theme';

type ButtonProps = {
    type?: 'primary' | 'outline'
    icon?: ReactElement
    onClick?: (event: MouseEvent) => void
}

export default function Button(props: PropsWithChildren<ButtonProps>) {
    return <OutlineWrapper>
        <ButtonWrapper outlined={true} onClick={props.onClick}>
            <Icon>{ props.icon }</Icon>
            { props.children }
        </ButtonWrapper>
    </OutlineWrapper>
}

const OutlineWrapper = styled.div`
    ${tw`
        flex
        rounded-lg
    `}
    background: ${Theme.Colors.neon.gradient};
`

const ButtonWrapper = styled.button<{ outlined: boolean }>`
    ${props => props.outlined ? tw`
        box-border
        m-0.5
    ` : null}
  
    ${tw`
        w-80 h-12
        rounded-md
        
        flex
        justify-center
        items-center
        
        border-0
        outline-none
        
        text-white
        text-base
        font-semibold
        
        cursor-pointer
    `}
    
    font-family: Overpass, sans-serif;
    ${props => `
        background: ${props.outlined ? Theme.Colors.gray['900'] : Theme.Colors.neon.gradient};
        box-shadow: inset 0 0 0 ${props.outlined ? '' : '2px'} rgba(255, 255, 255, 0.2);
    `}
    
`

const Icon = styled.div(tw`
    flex
    mb-1
    mr-3
    items-center
    text-xl
`)