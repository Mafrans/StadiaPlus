import React from 'react';
import ReactDOM from 'react-dom';

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
                <div>
                </div>
            ),
            this.props.tile,
        );
    }
}