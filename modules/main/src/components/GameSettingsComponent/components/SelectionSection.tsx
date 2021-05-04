import Dropdown from '../../shared/Dropdown';
import * as React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

export type SelectionSectionProps = {
    heading: string
    default?: string
    options?: string[]
    onChange?: (value: string) => void
}

export const SelectionSection = (props: SelectionSectionProps) => <>
    <Heading>{ props.heading }</Heading>
    <Dropdown
        style={{ width: 250 }}
        default={ props.default }
        options={ props.options || [] }
        onChange={ props.onChange }
    />
</>;

const Heading = styled.p`
  ${tw`
    mb-2
  `}
  font-family: Overpass, sans-serif;
`