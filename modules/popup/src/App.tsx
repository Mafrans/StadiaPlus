import React from 'react';
import Header from './Header';
import StadiaPlusLogo from './assets/image/StadiaPlus.svg';
import styled from 'styled-components';
import tw from 'twin.macro';
import GoogleButton from './GoogleButton';
import StadiaPlusDB from '../../shared/StadiaPlusDB';
import DBProfile from '../../shared/models/DBProfile';

interface AppState {
    profile: DBProfile | null
}

const AppWrapper = styled('div')`
    ${tw``}
`;

export default class App extends React.Component<any, AppState> {
    constructor(params: any) {
        super(params);
        StadiaPlusDB.connect('https://stadiaplus.dev')
        this.state = { profile: null }
    }

    render() {
        return (
            <AppWrapper>
                <Header icon={{ src: StadiaPlusLogo, alt: 'Stadia+ Logo' }} title='Stadia+' />
                <GoogleButton
                    visible={ this.state.profile === null }
                    onAuthenticate={ this.onAuthenticate.bind(this) }
                />
                <div>
                    {JSON.stringify(this.state.profile)}
                </div>
            </AppWrapper>
        );
    }

    onAuthenticate(profile: DBProfile | null) {
        this.setState(() => ({ profile }))
    }
}