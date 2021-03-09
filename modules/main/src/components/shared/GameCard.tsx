import React, { CSSProperties } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

interface IGamePanelProps {
    src: string
    finished?: boolean
    offsetX: number
    offsetY: number
    scale: number
}

interface IGameCardState {
    entering: boolean;
}

const Card = styled.div`
  ${tw`
    w-24
    h-32
    opacity-25
    rounded-md
    
    bg-cover
    bg-center
    
    transition
    duration-1000
  `}
`

export default class GameCard extends React.Component<IGamePanelProps, IGameCardState> {
    constructor(props: any) {
        super(props);
        this.state = {
            entering: true
        }

        setTimeout(() => {
            this.setState(() => ({
               entering: false
            }))
        }, 500);
    }

    render() {
        return (
            <Card style={{
                opacity: this.props.finished ? 1 : (this.state.entering ? 0 : undefined),
                transform: `
                    translate(
                        ${this.props.finished ? 0 : this.props.offsetX}px, 
                        ${this.props.finished ? 0 : this.props.offsetY}px
                    ) 
                    scale(
                        ${this.props.finished ? 1 : this.props.scale}
                    )
                `,
                backgroundImage: `url(${this.props.src})`
            }}/>
        );
    }
}