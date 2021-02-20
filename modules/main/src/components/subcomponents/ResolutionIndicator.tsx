import React from 'react';
import GameTileIcon from './GameTileIcon';
import { CgScreen } from 'react-icons/cg';
import StadiaCodec from '../../../../shared/models/StadiaCodec';
import { Config } from '../../../../shared/Config';

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
                this.setState(() => ({
                    value: resolutions[this.props.uuid],
                }));
            }
        })

        Config.RESOLUTIONS.addChangeListener(newResolutions => {
            if (newResolutions !== null && newResolutions !== undefined && newResolutions.hasOwnProperty(this.props.uuid)) {
                this.setState(() => ({
                    value: newResolutions[this.props.uuid],
                }));
            }
        })
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