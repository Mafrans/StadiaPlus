import React from 'react';
import Header from './Header';
import StadiaPlusLogo from './assets/image/StadiaPlus.svg';
import styled from 'styled-components';
import tw from 'twin.macro';

const AppWrapper = styled('div')`
    ${tw``}
`;

export default class App extends React.Component<any, any> {
    constructor(params: any) {
        super(params);
    }

    render() {
        return (
            <AppWrapper>
                <Header icon={{ src: StadiaPlusLogo, alt: 'Stadia+ Logo' }} title='Stadia+' />
            </AppWrapper>
        );
    }
}