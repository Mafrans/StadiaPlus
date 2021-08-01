import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Theme } from '../Theme';

export interface SwitchProps {
    value: boolean | (() => Promise<boolean | null>)
    onChange: (value: boolean) => void
}

function Switch(props: SwitchProps) {
    const [ value, setValue ] = useState<boolean>(false);

    const trySetValue = (newValue: boolean) => {
        if (newValue !== value) {
            setValue(newValue);
            props.onChange(newValue);
        }
    }

    if (props.value instanceof Function) {
        // This could be an issue with configs, since they'll be looped
        props.value().then(value => {
            if (value) {
                trySetValue(value)
            }
        });
    }
    else if(props.value) {
        trySetValue(props.value);
    }

    return (
        <Border value={value} onClick={() => trySetValue(!value)}>
            <Wrapper>
                <Handle value={value} />
            </Wrapper>
        </Border>
    );
}

const Border = styled.div<{value: boolean}>`
    ${tw`
        inline-block
        rounded-full
        box-border
        w-8
    `}
    padding: 1px;
    background: ${props => props.value ? Theme.Colors.neon.gradient : Theme.Colors.gray['700']};
`

const Wrapper = styled.div`
    ${tw`
        rounded-full
    `}
    padding: 3px;
    background: ${Theme.Colors.gray['900']};
`

const Handle = styled.div<{value: boolean}>`
    ${tw`
        rounded-full
        bg-white
    `}
    width: 10px;
    height: 10px;
    transition: margin-left 0.125s ease-out;
    margin-left: ${props => props.value ? 'calc(100% - 10px)' : '0'}
`

export default Switch;