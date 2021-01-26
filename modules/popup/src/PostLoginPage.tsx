import React from 'react';
import UpdatePanel from './components/UpdatePanel';
import { UpdateStatus } from './components/UpdateIcon';
import ProfilePanel from './components/ProfilePanel';
import DBProfile from '../../shared/models/DBProfile';
import GenericButton from './components/GenericButton';
import styled from 'styled-components';
import tw from 'twin.macro';
import Theme from './Theme';

interface PostLoginPageProps {
    profile: DBProfile
}

const SupportText = styled('p')`
  ${tw`
        text-sm
        mt-2
    `}
  color: ${Theme.GRAY};
`;

export default class PostLoginPage extends React.Component<PostLoginPageProps, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                <UpdatePanel
                    status={UpdateStatus.WAITING}
                    title='Waiting...'
                    description='Start Stadia to begin using Stadia+'
                />
                <ProfilePanel profile={this.props.profile} />
                <GenericButton
                    style={{
                        backgroundColor: Theme.TOMATO,
                        color: '#ffffff',
                    }}
                    icon='redeem'
                >
                    Support Stadia+
                </GenericButton>
                <SupportText>
                    I'm a high school student and Stadia+ isn't free to host.
                    If you have a dollar to spare, please consider supporting
                    me on Patreon or Ko.fi
                </SupportText>
            </div>
        );
    }
}