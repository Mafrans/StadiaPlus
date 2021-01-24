import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import StadiaPlusDB from '../../shared/StadiaPlusDB';
import DBProfile from '../../shared/models/DBProfile';

interface GoogleButtonProps {
    visible?: boolean,
    onAuthenticate: (profile: DBProfile | null) => void
}

const Button = styled('button')`
    ${tw`
    `}
`;

export default class GoogleButton extends React.Component<GoogleButtonProps, any> {
    constructor(props: GoogleButtonProps) {
        super(props);
    }

    render() {
        return (
            <Button
                style={{
                    visibility:
                        this.props.visible === undefined
                        || this.props.visible
                            ? 'visible'
                            : 'hidden'
                }}
                onClick={this.startSignIn.bind(this)}
            >
                Sign in with Google
            </Button>
        );
    }

    async startSignIn() {
        await StadiaPlusDB.authenticate();
        const profile = await StadiaPlusDB.getProfile();
        console.log({ profile });
        this.props.onAuthenticate(profile)
    }
}