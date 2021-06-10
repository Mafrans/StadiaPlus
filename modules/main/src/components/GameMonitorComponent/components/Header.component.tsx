import { Theme } from "../../../../../shared/Theme"
import React from "react"
import { CgChevronDown, CgChevronUp, CgClose } from 'react-icons/cg';
import styled from "styled-components"
import tw from "twin.macro"

export type HeaderProps = {
    visible?: boolean;
    onClose?: () => void;
    onGrab?: (event: React.MouseEvent) => void
}

const Header = (props: HeaderProps) => (
    <>
    { props.visible && (
        <>
            <HeaderWrapper onMouseDown={props.onGrab!}>
                {/*  TODO: Add translations  */}
                <Heading>Game Monitor</Heading>
                <ToggleIcon aria-roledescription='button' onClick={() => props.onClose!()}>
                    <CgClose />
                </ToggleIcon>
            </HeaderWrapper>
            <Divider />
        </>
    )}
    </>
)

const HeaderWrapper = styled.div`
    ${tw`
        flex
        items-center

        p-2
    `}
    cursor: grab;
    background: ${Theme.Colors.neon.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

const Heading = styled.h1`
    ${tw`
        text-base
        font-normal
        mr-auto
    `}
`

const ToggleIcon = styled.div`
    ${tw`
        cursor-pointer
        flex
        items-center
    `}
`

const Divider = styled.h1`
    ${tw`
        border-0
        h-px
        m-2
    `}
    background-color: ${Theme.Colors.gray['700']};
`

export default Header