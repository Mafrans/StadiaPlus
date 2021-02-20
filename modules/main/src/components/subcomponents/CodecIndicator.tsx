import React from 'react';
import GameTileIcon from './GameTileIcon';
import { CgOptions } from 'react-icons/cg';
import StadiaCodec from '../../../../shared/models/StadiaCodec';
import { Config } from '../../../../shared/Config';

interface ICodecSelectIconProps {
    uuid: string;
}

interface ICodecSelectIconState {
    value: StadiaCodec | null;
}

export default class CodecIndicator extends React.Component<ICodecSelectIconProps, ICodecSelectIconState> {
    constructor(props: any) {
        super(props);

        this.state = {
            value: null,
        }

        Config.CODECS.get().then((codecs) => {
            if (codecs !== null && codecs !== undefined && codecs.hasOwnProperty(this.props.uuid)) {
                this.setState(() => ({
                    value: codecs[this.props.uuid],
                }));
            }
        })

        Config.CODECS.addChangeListener(newCodecs => {
            if (newCodecs !== null && newCodecs !== undefined && newCodecs.hasOwnProperty(this.props.uuid)) {
                this.setState(() => ({
                    value: newCodecs[this.props.uuid],
                }));
            }
        })
    }


    render() {
        if (this.state.value === null) return null;

        return (
            <GameTileIcon icon={<CgOptions />}>
                { this.state.value.name }
            </GameTileIcon>
        );
    }
}