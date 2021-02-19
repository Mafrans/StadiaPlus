import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

interface IGamePanelProps {
    src: string
}

export default class GamePanel extends React.Component<IGamePanelProps> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <Wrapper style={{ backgroundImage: `url(${this.props.src})` }}/>
        );
    }
}

const Wrapper = styled.div`
  ${tw`
    w-64
    h-80
    opacity-25
  `}
`