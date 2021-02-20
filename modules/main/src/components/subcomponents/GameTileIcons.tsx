import React from 'react';
import ReactDOM from 'react-dom';
import CodecSelectIcon from './CodecSelectIcon';
import { CgOptions, CgScreen } from 'react-icons/cg';
import styled from 'styled-components';
import tw from 'twin.macro';

interface IGameTileIconProps {
    tile: HTMLDivElement;
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
                    <CodecSelectIcon icon={<CgOptions />}>
                        VP9
                    </CodecSelectIcon>
                </Wrapper>
            ),
            this.props.tile,
        );
    }
}

const Wrapper = styled.div`
  ${tw`
    absolute
    right-0
  `}
`