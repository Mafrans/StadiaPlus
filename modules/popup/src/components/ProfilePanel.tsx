import React from 'react';
import DBProfile from '../../../shared/models/DBProfile';
import GenericButton from './GenericButton';
import StadiaPlusDB from '../../../shared/StadiaPlusDB';
import styled from 'styled-components';
import tw from 'twin.macro';

interface ProfilePanelProps {
    profile: DBProfile
}

const ProfileInfo = styled('div')`
    ${tw`
        flex
    `}
`;

export default class ProfilePanel extends React.Component<ProfilePanelProps, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                <ProfileInfo>
                    <img
                        src={this.props.profile.avatar}
                        alt={`${this.props.profile.name}'s Avatar`}
                    />

                    <div>
                        <h3>{this.props.profile.name}</h3>
                        <p>#{this.props.profile.tag}</p>
                    </div>
                </ProfileInfo>

                <GenericButton
                    icon='person'
                    onClick={
                        () => {
                            window.open(`${StadiaPlusDB.url}/profile/${this.props.profile.name}/${this.props.profile.tag}`);
                        }
                    }
                >
                    View Profile
                </GenericButton>
            </div>
        );
    }
}