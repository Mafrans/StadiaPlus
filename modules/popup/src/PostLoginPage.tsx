import React from 'react';
import UpdatePanel from './components/UpdatePanel';
import { UpdateStatus } from './components/UpdateIcon';
import ProfilePanel from './components/ProfilePanel';
import DBProfile from '../../shared/models/DBProfile';
import GenericButton from './components/GenericButton';

interface PostLoginPageProps {
    profile: DBProfile
}

export default class PostLoginPage extends React.Component<PostLoginPageProps, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                <UpdatePanel
                    status={ UpdateStatus.WAITING }
                    title='Waiting...'
                    description='Start Stadia to begin using Stadia+'
                />
                <ProfilePanel profile={ this.props.profile } />
            </div>
        );
    }
}