import React from 'react';
import Dropdown, { DropdownProps } from '../../../../shared/components/Dropdown';
import styled from 'styled-components';
import tw from 'twin.macro';

type DropdownEntryProps = {
    title: string
    dropdown: DropdownProps
}

function DropdownEntry(props: DropdownEntryProps) {
    return (
        <Wrapper>
            <Title>{ props.title }</Title>
            <Dropdown style={{ width: '100%' }} {...props.dropdown} />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    ${tw`
        my-2
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