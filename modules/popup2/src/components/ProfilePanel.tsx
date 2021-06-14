import React from 'react';
import { CgArrowTopRight, CgProfile } from 'react-icons/cg';
import Container from './Container';
import styled from 'styled-components';
import { Theme } from '../../../shared/Theme';
import { StadiaPlusDB } from '../../../shared/StadiaPlusDB';
import tw from 'twin.macro';

interface ProfilePanelProps {
    profile: StadiaPlusDB.Profile
}

export default function ProfilePanel(props: ProfilePanelProps) {
    const [name, tag] = (props.profile.names[0]||'#').split('#');

    return <Panel>
        <Avatar>
            { props.profile.avatar && <AvatarImage src={props.profile.avatar} alt={'Profile picture'} /> }
            <Placeholder>
                <CgProfile size={24} />
            </Placeholder>
        </Avatar>
        <ProfileInfo>
            <Name>{name}</Name>
            <Tag>#{tag}</Tag>
        </ProfileInfo>
        <ProfileLink>
            <CgArrowTopRight size={24} />
        </ProfileLink>
    </Panel>;
}

const Panel = styled.section(tw`
    flex
    my-6
    items-center
`)

const Avatar = styled.div(tw`
    relative
    w-12 h-12
    text-white`
)

const AvatarImage = styled.img(tw`
    absolute
    w-full h-full
    rounded-full
    z-10
`)

const Placeholder = styled.div`
    ${tw`
        flex
        justify-center
        items-center
        w-full h-full
        rounded-full
        box-border
    `}
    border: 1px solid ${Theme.Colors.gray['700']};
`

const ProfileInfo = styled.div`
    ${tw`
        text-white
        ml-4
    `}
    font-family: Overpass, sans-serif;
`

const Name = styled.h3(tw`
    mb-1
`)

const Tag = styled.p`
    ${tw`
        text-sm
    `}
    color: ${Theme.Colors.gray['500']};
`

const ProfileLink = styled.a(tw`
    text-white
    ml-auto
`)
