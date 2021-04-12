import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import tw from 'twin.macro';
import CodecIndicator from './CodecIndicator';
import ResolutionIndicator from './ResolutionIndicator';

type IndicatorGroupProps = {
    tile: HTMLDivElement;
    uuid: string;
}

const IndicatorGroup = (props: IndicatorGroupProps) => {
    return ReactDOM.createPortal((
        <Wrapper>
            <ResolutionIndicator uuid={props.uuid}/>
            <CodecIndicator uuid={props.uuid}/>
        </Wrapper>
    ), props.tile);
}

const Wrapper = styled.div`
  ${tw`
    absolute
    flex
    right-0
  `}
`

export default IndicatorGroup;