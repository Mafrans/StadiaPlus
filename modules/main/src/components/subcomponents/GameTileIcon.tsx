import React from 'react';
import ReactDOM from 'react-dom';

interface IGameTileIconProps {
    tile: HTMLDivElement;
}

export default class GameTileIcon extends React.Component<IGameTileIconProps> {
    constructor(props: any) {
        super(props);
    }

    render() {
        console.log(this.props)

        return ReactDOM.createPortal(
            (
                <div>
                    { this.props.children }
                </div>
            ),
            this.props.tile,
        );
    }
}