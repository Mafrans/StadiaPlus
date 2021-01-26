import React from 'react';
import DBProfile from '../../../shared/models/DBProfile';
import GenericButton from './GenericButton';
import StadiaPlusDB from '../../../shared/StadiaPlusDB';
import styled from 'styled-components';
import tw from 'twin.macro';
import Theme from '../Theme';

interface ProfilePanelProps {
    profile: DBProfile
}

const ProfileWrapper = styled('div')`
    ${tw`
        mb-4
        p-4
        box-border
        rounded-lg
    `}
    border: ${Theme.LIGHT_GRAY} 2px solid;
`

const ProfileInfoWrapper = styled('div')`
    ${tw`
        flex
    `}
`;

const ProfileImage = styled('img')`
    ${tw`
        w-12
        h-12
        mr-4
        rounded-full
    `}
`;

const ProfileName = styled('h3')`
    ${tw`
        text-lg
        font-medium
    `}
    color: ${Theme.CHARCOAL};
`;

const ProfileTag = styled('p')`
    ${tw`
        text-sm
    `}
    color: ${Theme.GRAY};
`;

export default class ProfilePanel extends React.Component<ProfilePanelProps, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <ProfileWrapper>
                <ProfileInfoWrapper>
                    <ProfileImage
                        src={this.props.profile.avatar}
                        alt={`${this.props.profile.name}'s Avatar`}
                    />

                    <div>
                        <ProfileName>{this.props.profile.name}</ProfileName>
                        <ProfileTag>#{this.props.profile.tag}</ProfileTag>
                    </div>
                </ProfileInfoWrapper>

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
            </ProfileWrapper>
        );
    }
}