import React, { PropsWithChildren } from 'react';
import { CgArrowLeft } from 'react-icons/cg';
import styled from 'styled-components';
import tw from 'twin.macro';
import { useHistory } from 'react-router-dom';

type HeaderProps = {
}

function Header(props: PropsWithChildren<HeaderProps>) {
    const history = useHistory();

    return (
        <Wrapper>
            <BackButton onClick={() => history.goBack()}>
                <CgArrowLeft size={24} />
            </BackButton>
            <Title>{ props.children }</Title>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    ${tw`
        flex
        items-center
    `}
`

const BackButton = styled.div.attrs({role: 'button'})`
    ${tw`
        p-1 mr-2
        cursor-pointer
        text-white
    `}
`

const Title = styled.h2`
    ${tw`
        text-xl
        font-semibold
        text-white
    `}
    font-family: Overpass;
`


export default Header;