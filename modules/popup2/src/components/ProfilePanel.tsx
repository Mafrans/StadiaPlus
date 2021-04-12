import React from 'react';
import { CgArrowTopRight, CgProfile } from 'react-icons/cg';
import Container from './Container';
import styled from 'styled-components';
import { Theme } from '../../../shared/Theme';
import { StadiaPlusDB } from '../../../shared/StadiaPlusDB';

const Panel = styled.section`
  display: flex;
  align-items: center;
`

const ProfilePicture = styled.div`
  position: relative;
  width: 3rem;
  height: 3rem;
  color: white;
  
  >* {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 999px;
    box-sizing: border-box;
  }
`

const Placeholder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${Theme.Colors.gray['700']};
`

const ProfileInfo = styled.div`
  font-family: Overpass, sans-serif;
  color: white;
  margin-left: 1rem;
`

const Name = styled.h3`
  margin-bottom: 0.25rem;
`

const Tag = styled.p`
  color: ${Theme.Colors.gray['500']};
  font-size: 0.9rem;
`

const ProfileLink = styled.a`
  color: white;
  margin-left: auto;
`

interface ProfilePanelProps {
    profile: StadiaPlusDB.Profile
}

export default function ProfilePanel(props: ProfilePanelProps) {
    const [name, tag] = (props.profile.names[0]||'#').split('#');

    return <Panel>
        <ProfilePicture>
            { props.profile.avatar && <img src={props.profile.avatar} alt={'Profile picture'} /> }
            <Placeholder>
                <CgProfile size={24} />
            </Placeholder>
        </ProfilePicture>
        <ProfileInfo>
            <Name>{name}</Name>
            <Tag>#{tag}</Tag>
        </ProfileInfo>
        <ProfileLink>
            <CgArrowTopRight size={24} />
        </ProfileLink>
    </Panel>;
}