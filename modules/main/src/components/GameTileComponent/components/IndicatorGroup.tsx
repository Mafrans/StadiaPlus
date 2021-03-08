import React from 'react';
import ReactDOM from 'react-dom';
import Indicator from './Indicator';
import { CgOptions, CgScreen } from 'react-icons/cg';
import styled from 'styled-components';
import tw from 'twin.macro';
import CodecIndicator from './CodecIndicator';
import ResolutionIndicator from './ResolutionIndicator';

type IndicatorGroupProps = {
    tile: HTMLDivElement;
    uuid: string;
}

export default function IndicatorGroup(props: IndicatorGroupProps) {
    return ReactDOM.createPortal(
        (
            <Wrapper>
                <ResolutionIndicator uuid={props.uuid}/>
                <CodecIndicator uuid={props.uuid}/>
            </Wrapper>
        ),
        props.tile,
    );
}

const Wrapper = styled.div`
  ${tw`
    absolute
    flex
    right-0
  `}
`