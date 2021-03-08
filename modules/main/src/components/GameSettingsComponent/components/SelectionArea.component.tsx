import * as React from 'react';
import Dropdown from '../../subcomponents/Dropdown';
import StadiaCodec from '../../../../../shared/models/StadiaCodec';
import styled from 'styled-components';
import tw from 'twin.macro';

export type SelectionSectionProps = {
    heading: string
    default?: string
    options?: string[]
    onChange?: (value: string) => void
}

export default function SelectionSection(props: SelectionSectionProps) {
    return (
        <>
            <Heading>{ props.heading }</Heading>
            <Dropdown
                style={{ width: 250 }}
                default={ props.default }
                options={ props.options || [] }
                onChange={ props.onChange }
            />
        </>
    );
}

const Section = styled.section`
  ${tw`
    pr-8
  `}
`

const Heading = styled.p`
  ${tw`
    mb-2
  `}
  font-family: Overpass, sans-serif;
`