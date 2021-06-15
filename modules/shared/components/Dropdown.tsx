import React, { CSSProperties, useEffect, useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { CgChevronDown } from 'react-icons/cg';
import { Theme } from '../Theme';

export type DropdownProps = {
    options: string[];
    style?: CSSProperties;
    value?: string | (() => Promise<string | null>);
    onChange?: (value: string) => void;
}

const Dropdown = (props: DropdownProps) => {
    const [ value, setValue ] = useState<string>();
    const [ active, setActive ] = useState<boolean>(false);

    useEffect(() => {
        window.addEventListener('click', event => {
            setActive(false);
        });
    }, []);

    const onClick = (event: React.MouseEvent) => {
        setActive(!active);
        event.stopPropagation();
    }

    const onClickOption = (event: React.MouseEvent, option: string) => {
        setValue(option);
        props.onChange?.call(this, option);
    }

    const trySetValue = (newValue: string) => {
        if (newValue !== value) {
            setValue(newValue);
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

    return <Select style={props.style}>
        <GradientBorder active={active}>
            <CurrentValue
                onClick={onClick}
            >
                <CurrentLabel>{ value }</CurrentLabel>
                <CgChevronDown
                    style={{
                        marginLeft: 'auto',
                        transform: active ? 'rotate(180deg)' : '',
                    }}
                />
            </CurrentValue>
        </GradientBorder>
        <OptionContainer active={active}>
            {
                props.options.map(option => (
                    <Option onClick={event => onClickOption(event, option)}>
                        { option }
                    </Option>
                ))
            }
        </OptionContainer>
    </Select>;
}

const GradientBorder = styled.div<{active: boolean}>`
    ${tw`
        box-border
        p-px
        rounded-md
    `}
    background: ${props => props.active ? Theme.Colors.neon.gradient : Theme.Colors.gray['700']};
`

const Select = styled.div`
    ${tw`
        relative
        text-white
    `}
    font-family: Overpass, sans-serif;
`

const CurrentValue = styled.div`
    ${tw`
        flex
        items-center
        
        box-border
        px-3
        py-1
        
        rounded-md
        cursor-pointer
    `}
    background-color: ${Theme.Colors.gray['900']};
`

const CurrentLabel = styled.div`
    ${tw`
        text-sm
        font-light
    `}
    margin-top: 4px;
`

const OptionContainer = styled.div<{active: boolean}>`
    ${tw`
        absolute
        
        box-border
        rounded-md
        overflow-scroll
        
        transition
        
        px-3 py-1
        w-full
        z-10
    `}
    
    ${props => `
        pointer-events: ${props.active ? 'all' : 'none'};
        opacity: ${props.active ? 1 : 0};
        transform: translateY(${props.active ? 0.25 : 0}rem);
    `}
  
    border: 1px solid ${Theme.Colors.gray['700']};
    background-color: ${Theme.Colors.gray['800']};
    max-height: 150px;

    &::-webkit-scrollbar {
        width: 16px;
        height: 100%;
    }
    &::-webkit-scrollbar-thumb {
        background: ${Theme.Colors.gray['500']};
        border-radius: 9999px;
        border: solid transparent 6px;
        background-clip: padding-box;
    }
`

const Option = styled.div`
    ${tw`
        text-sm
        font-light
        cursor-pointer
        
        py-1
    `}
`

export default Dropdown;