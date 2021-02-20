import React, { CSSProperties } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { CgChevronDown } from 'react-icons/cg';
import { Theme } from '../../../../shared/Theme';

interface IDropdownProps {
    options: { value: string, label: string }[];
    style: CSSProperties;
    onChange?: (value: string) => void;
}

interface IDropdownState {
    value: { value: string, label: string };
    active: boolean;
}

export default class Dropdown extends React.Component<IDropdownProps, IDropdownState> {
    constructor(props: any) {
        super(props);

        this.state = {
            active: false,
            value: this.props.options[0],
        }

        window.addEventListener('click', this.onClickAnywhere.bind(this));
    }

    render() {
        return (
            <Select style={this.props.style}>
                <GradientBorder style={{ background: this.state.active ? Theme.Colors.neon.gradient : Theme.Colors.gray['700'] }}>
                    <CurrentValue
                        onClick={this.onClick.bind(this)}
                    >
                        <CurrentLabel>{ this.state.value.label }</CurrentLabel>
                        <CgChevronDown
                            style={{
                                marginLeft: 'auto',
                                transform: this.state.active ? 'rotate(180deg)' : '',
                            }}
                        />
                    </CurrentValue>
                </GradientBorder>
                <OptionContainer
                    style={{
                        pointerEvents: this.state.active ? 'all' : 'none',
                        opacity: this.state.active ? 1 : 0,
                        transform: `translateY(${ this.state.active ? 0.25 : 0 }rem)`,
                    }}
                >
                    {
                        this.props.options.map(option => (
                            <Option onClick={event => this.onClickOption(event, option)}>
                                { option.label }
                            </Option>
                        ))
                    }
                </OptionContainer>
            </Select>
        );
    }

    onClick(event: React.MouseEvent) {
        this.setState(state => ({
            active: !state.active,
        }))
        event.stopPropagation();
    }

    onClickOption(event: React.MouseEvent, option: { value: string, label: string }) {
        this.setState(() => ({
            value: option,
        }))

        if(this.props.onChange !== undefined) {
            this.props.onChange(this.state.value.value);
        }
    }

    onClickAnywhere(event: MouseEvent) {
        this.setState(() => ({
            active: false,
        }))
        event.stopPropagation();
    }
}

const GradientBorder = styled.div`
  ${tw`
    box-border
    p-px
    rounded-md
  `}
`

const Select = styled.div`
  ${tw`
    z-10
    relative
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

const OptionContainer = styled.div`
  ${tw`
    absolute
    
    box-border
    rounded-md
    overflow-scroll
    
    transition
    
    px-3
    py-1
    w-full
  `}
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