import React from 'react';
import GoogleButton from './components/GoogleButton';
import DBProfile from '../../shared/models/DBProfile';

interface LoginPageProps {
    onAuthenticate: (profile: DBProfile | null) => void
}

export default class LoginPage extends React.Component<LoginPageProps, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                <GoogleButton
                    // visible={ this.state.profile === null }
                    onAuthenticate={ this.props.onAuthenticate.bind(this) }
                />
            </div>
        );
    }
}