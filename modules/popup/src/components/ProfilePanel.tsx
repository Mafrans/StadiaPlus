import React from 'react';
import { CgArrowTopRight, CgProfile } from 'react-icons/cg';
import styled from 'styled-components';
import { Theme } from '../../../shared/Theme';
import StadiaPlusDB, { Profile } from '../../../shared/StadiaPlusDB';
import tw from 'twin.macro';

interface ProfilePanelProps {
    initialized?: boolean
    syncEnabled?: boolean
    profile: Profile
}

export default function ProfilePanel(props: ProfilePanelProps) {
    const [name, tag] = (props.profile.names[0]||'#').split('#');

    return props.syncEnabled ? <Panel>
        { props.initialized ? <>
                <Avatar>
                    {props.profile.avatar && <AvatarImage src={props.profile.avatar} alt={'Profile picture'} />}
                    <Placeholder>
                        <CgProfile size={24} />
                    </Placeholder>
                </Avatar>
                <ProfileInfo>
                    <Name>{name}</Name>
                    <Tag>#{tag}</Tag>
                </ProfileInfo>
                <ProfileLink onClick={() => window.open(StadiaPlusDB.url + '/profile/' + name + '/' + tag, '_blank')}>
                    <CgArrowTopRight size={24} />
                </ProfileLink>
            </>
            : <AlmostThere>
                Almost there! Your profile will be ready after your next gaming session!
            </AlmostThere>
        }
    </Panel> : null;
}

const AlmostThere = styled.div`
    font-family: Overpass, sans-serif;
    font-weight: var(--font-weight-regular);
    color: var(--color-white);
`

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
    cursor-pointer
    text-white
    ml-auto
`)
