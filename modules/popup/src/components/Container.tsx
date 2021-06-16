import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Theme } from '../../../shared/Theme';

const Container = styled.main`
    ${tw`
        p-4
    `}
    min-width: 20rem;
    background-color: ${Theme.Colors.gray['900']};
`

export default Container;