import React, { CSSProperties } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

interface GameCardProps {
    src: string
    finished?: boolean
    scale: number
}

const GameCard = (props: GameCardProps) => {
    return (
        <Wrapper style={{
            backgroundImage: `url(${props.src})`
        }}/>
    );
};

const Wrapper = styled.div`
  ${tw`
    w-24
    h-32
    opacity-25
    rounded-md
    
    bg-cover
    bg-center
    
    duration-1000
  `}
  
  animation: 3s entering;
  
  @keyframes entering {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

export default GameCard;