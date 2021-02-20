import React from 'react';
import ReactDOM from 'react-dom';
import TestComponent from './components/TestComponent';
import Util from './Util';
import PageUpdateComponent from './components/PageUpdateComponent';
import StadiaPlusDB from '../../shared/StadiaPlusDB';
import GameUpdateComponent from './components/GameUpdateComponent';
import { StadiaGameDB } from './StadiaGameDB';
import GameTileComponent from './components/GameTileComponent';
import Fonts from './Fonts';
import CodecSelectComponent from './components/CodecSelectComponent';
import GameSettingsComponent from './components/GameSettingsComponent';


document.addEventListener('DOMContentLoaded', async () => {
    Fonts.load('Overpass', [300, 400, 700]);

    await StadiaPlusDB.connect('http://localhost:3000');
    await StadiaPlusDB.authenticate();
    await StadiaGameDB.update();
    await Util.updateRenderer();

    const root = document.createElement('div');
    root.id = 'stadiaplus-root';
    document.body.appendChild(root);

    ReactDOM.render(
        <div>
            <GameUpdateComponent/>
            <PageUpdateComponent/>
            <GameTileComponent/>
            <GameSettingsComponent/>
        </div>,
        root
    )
})
