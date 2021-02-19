import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

interface IGamePanelProps {
    src: string
}

export default class GameCard extends React.Component<IGamePanelProps> {
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
    w-24
    h-32
    opacity-25
    rounded-md
  `}
`