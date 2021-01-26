import React from 'react';
import Header from './components/Header';
import FullLogo from './assets/image/FullLogo.svg';
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
    ${tw`
        w-80
        p-4
    `}
`;

export default class App extends React.Component<any, AppState> {
    constructor(params: any) {
        super(params);
        this.state = { profile: undefined };
        this.checkAuthenticated().then(this.onAuthenticate.bind(this));
    }

    async checkAuthenticated(): Promise<DBProfile | null> {
        await StadiaPlusDB.connect('https://stadiaplus.dev');
        if (await StadiaPlusDB.authenticate()) {
            return await StadiaPlusDB.getProfile();
        }
        return null;
    }

    render() {
        if (this.state.profile !== undefined) {
            return (
                <AppWrapper>
                    <Header icon={{ src: FullLogo, alt: 'Stadia+ Logo' }} />

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