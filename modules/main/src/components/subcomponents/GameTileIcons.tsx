import React from 'react';
import ReactDOM from 'react-dom';
import GameTileIcon from './GameTileIcon';
import { CgOptions, CgScreen } from 'react-icons/cg';
import styled from 'styled-components';
import tw from 'twin.macro';
import CodecIndicator from './CodecIndicator';
import ResolutionIndicator from './ResolutionIndicator';

interface IGameTileIconProps {
    tile: HTMLDivElement;
    uuid: string;
}

export default class GameTileIcons extends React.Component<IGameTileIconProps> {
    constructor(props: any) {
        super(props);
    }

    render() {
        console.log(this.props)

        return ReactDOM.createPortal(
            (
                <Wrapper>
                    <ResolutionIndicator uuid={this.props.uuid}/>
                    <CodecIndicator uuid={this.props.uuid}/>
                </Wrapper>
            ),
            this.props.tile,
        );
    }
}

const Wrapper = styled.div`
  ${tw`
    absolute
    flex
    right-0
  `}
`