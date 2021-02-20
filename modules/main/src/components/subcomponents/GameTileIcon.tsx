import React, { ReactNode } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

interface ICodecSelectIconProps {
    icon: ReactNode
}

export default class GameTileIcon extends React.Component<ICodecSelectIconProps> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <Wrapper>
                <Icon>
                    { this.props.icon }
                </Icon>
                <Label>
                    { this.props.children }
                </Label>
            </Wrapper>
        );
    }
}

const Wrapper = styled.div`
  ${tw`
    flex
    items-center
    justify-center
    
    bg-black
    bg-opacity-50
    
    border-2
    border-solid
    border-white
    border-opacity-20
    
    rounded-full
  
    box-border
  
    p-2
    m-1
    h-9
  `}
`

const Icon = styled.span`
  ${tw`
    flex
    items-center
  
    px-1
  `}
`

const Label = styled.label`
  ${tw`
    px-1
    m-0
  `}
  margin-top: 4px;
  font-family: 'Overpass', sans-serif;
`