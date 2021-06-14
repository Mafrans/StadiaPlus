import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import LogoImage from '../images/Stadia+Logo.png'

type StadiaPlusIconProps = {
}

const StadiaPlusLogo = (props: StadiaPlusIconProps) => {
    return (
        <Wrapper>
            <img src={LogoImage} alt={'STADIA+'} />
        </Wrapper>
    );
}

const Wrapper = styled.span<{size?: number}>`
    ${tw`
        flex
    `}
    width: 115px;
    object-fit: contain;
`

export default StadiaPlusLogo;