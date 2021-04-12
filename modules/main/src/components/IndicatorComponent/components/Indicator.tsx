import React, { PropsWithChildren, ReactChild, ReactChildren, ReactNode } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

type CodecSelectIconProps = {
    icon: ReactNode
}

const Indicator = (props: PropsWithChildren<CodecSelectIconProps>) => {
    return <>
        <Wrapper>
            { props.icon && <Icon>{ props.icon }</Icon> }
            <Label>
                { props.children }
            </Label>
        </Wrapper>
    </>
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

export default Indicator;