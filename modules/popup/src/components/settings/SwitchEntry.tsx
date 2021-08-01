import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Switch, { SwitchProps } from '../../../../shared/components/Switch';

type DropdownEntryProps = {
    title: string
    switch: SwitchProps
}

function DropdownEntry(props: DropdownEntryProps) {
    return (
        <Wrapper>
            <Title>{ props.title }</Title>
            <Switch { ...props.switch } />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    ${tw`
        my-2
        flex
        items-center
        justify-between
    `}
`

const Title = styled.p`
    ${tw`
        text-sm
        text-white
        font-light
        py-1
    `}
    font-family: Overpass, sans-serif;
`

export default DropdownEntry;