import React from 'react';
import GameTileIcon from './GameTileIcon';
import { CgOptions } from 'react-icons/cg';
import StadiaCodec from '../../../../shared/models/StadiaCodec';
import { Config } from '../../../../shared/Config';
import StadiaResolution from '../../../../shared/models/StadiaResolution';

interface ICodecIndicatorProps {
    uuid: string;
}

interface ICodecIndicatorState {
    value: StadiaCodec | null;
}

export default class CodecIndicator extends React.Component<ICodecIndicatorProps, ICodecIndicatorState> {
    constructor(props: any) {
        super(props);

        this.state = {
            value: null,
        }

        Config.CODECS.get().then((codecs) => {
            if (codecs !== null && codecs !== undefined && codecs.hasOwnProperty(this.props.uuid)) {
                this.setValue(codecs[this.props.uuid]);
            }
        })

        Config.CODECS.addChangeListener(newCodecs => {
            if (newCodecs !== null && newCodecs !== undefined && newCodecs.hasOwnProperty(this.props.uuid)) {
                this.setValue(newCodecs[this.props.uuid]);
            }
        })
    }

    setValue(value: StadiaCodec | null) {
        if (value?.name === StadiaCodec.AUTOMATIC.name) {
            value = null;
        }

        this.setState(() => ({ value }));
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