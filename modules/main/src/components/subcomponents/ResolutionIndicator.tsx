import React from 'react';
import GameTileIcon from './GameTileIcon';
import { CgScreen } from 'react-icons/cg';
import StadiaCodec from '../../../../shared/models/StadiaCodec';
import { Config } from '../../../../shared/Config';
import StadiaResolution from '../../../../shared/models/StadiaResolution';

interface ICodecResolutionIndicatorProps {
    uuid: string;
}

interface ICodecResolutionIndicatorState {
    value: StadiaCodec | null;
}

export default class ResolutionIndicator extends React.Component<ICodecResolutionIndicatorProps, ICodecResolutionIndicatorState> {
    constructor(props: any) {
        super(props);

        this.state = {
            value: null,
        }

        Config.RESOLUTIONS.get().then((resolutions) => {
            if (resolutions !== null && resolutions !== undefined && resolutions.hasOwnProperty(this.props.uuid)) {
                this.setValue(resolutions[this.props.uuid]);
            }
        })

        Config.RESOLUTIONS.addChangeListener(newResolutions => {
            if (newResolutions !== null && newResolutions !== undefined && newResolutions.hasOwnProperty(this.props.uuid)) {
                this.setValue(newResolutions[this.props.uuid]);
            }
        })
    }

    setValue(value: StadiaResolution | null) {
        if (value?.name === StadiaResolution.AUTOMATIC.name) {
            value = null;
        }

        this.setState(() => ({ value }));
    }


    render() {
        if (this.state.value === null) return null;

        return (
            <GameTileIcon icon={<CgScreen />}>
                { this.state.value.name }
            </GameTileIcon>
        );
    }
}