import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

type SettingsCategoryProps = {
    title: string
}

const SettingsCategory = (props: PropsWithChildren<SettingsCategoryProps>) => {
    return <Wrapper>
        <Title>{ props.title }</Title>
        { props.children }
    </Wrapper>;
}

const Wrapper = styled.section`
    ${tw`
        mt-8
    `}
`

const Title = styled.h3`
    ${tw`
        text-lg
        text-white
        font-semibold
    `}
    font-family: Overpass, sans-serif;
`

export default SettingsCategory;