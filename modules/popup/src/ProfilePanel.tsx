import React from 'react';
import DBProfile from '../../shared/models/DBProfile';
import GenericButton from './GenericButton';
import StadiaPlusDB from '../../shared/StadiaPlusDB';

interface ProfilePanelProps {
    profile: DBProfile
}

export default class ProfilePanel extends React.Component<ProfilePanelProps, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                <img
                    src={this.props.profile.avatar}
                    alt={`${this.props.profile.name}'s Avatar`}
                />

                <h3>{this.props.profile.name}</h3>
                <p>#{this.props.profile.tag}</p>

                <GenericButton
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