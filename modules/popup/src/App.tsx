import React from 'react';
import Header from './components/Header';
import StadiaPlusLogo from './assets/image/StadiaPlus.svg';
import styled from 'styled-components';
import tw from 'twin.macro';
import GoogleButton from './components/GoogleButton';
import StadiaPlusDB from '../../shared/StadiaPlusDB';
import DBProfile from '../../shared/models/DBProfile';
import ProfilePanel from './components/ProfilePanel';
import UpdatePanel from './components/UpdatePanel';
import { UpdateStatus } from './components/UpdateIcon';

interface AppState {
    profile?: DBProfile | null
}

const AppWrapper = styled('div')`
    ${tw``}
`;

export default class App extends React.Component<any, AppState> {
    constructor(params: any) {
        super(params);
        this.state = { profile: undefined };
        this.checkAuthenticated().then(this.onAuthenticate.bind(this));
    }

    async checkAuthenticated() {
        await StadiaPlusDB.connect('https://stadiaplus.dev');
        await StadiaPlusDB.authenticate();
        return await StadiaPlusDB.getProfile();
    }

    render() {
        if (this.state.profile !== undefined) {
            return (
                <AppWrapper>
                    <Header icon={{ src: StadiaPlusLogo, alt: 'Stadia+ Logo' }} title='Stadia+' />

                    {
                        this.state.profile !== null
                            ? (
                                <div>
                                    <UpdatePanel
                                        status={ UpdateStatus.DONE }
                                        title='All games updated'
                                        description='Last update: Jan 25th, 08:37'
                                    />
                                    <ProfilePanel profile={ this.state.profile } />
                                </div>
                            )
                            : <GoogleButton
                                // visible={ this.state.profile === null }
                                onAuthenticate={ this.onAuthenticate.bind(this) }
                            />
                    }

                </AppWrapper>
            );
        }

        return <div/>
    }

    onAuthenticate(profile: DBProfile | null) {
        this.setState(() => ({ profile }))
    }
}