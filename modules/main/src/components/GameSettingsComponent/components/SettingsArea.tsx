import * as React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import ReactDOM from 'react-dom';
import { Theme } from '../../../../../shared/Theme';
import { PropsWithChildren } from 'react';

export type SettingsAreaProps = {
    container: Element
    visible: boolean
}

export default function SettingsArea(props: PropsWithChildren<SettingsAreaProps>) {
    return ReactDOM.createPortal(<Wrapper visible={props.visible}>
        { props.children }
    </Wrapper>, props.container);
}

const Wrapper = styled.div<{ visible: boolean }>`
  ${props => `
    opacity: ${props.visible ? 1 : 0};
    pointer-events: ${props.visible ? 'all' : 'none'};
    transform: scale(${props.visible ? 1 : 1.05});
  `}

  ${tw`
    w-full h-full
    absolute z-10
    flex flex-col
    justify-center items-center
    box-border
    p-8
    transition duration-300
  `}
  
  background: ${Theme.Colors.gray['900']}
`;