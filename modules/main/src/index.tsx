import React from 'react';
import ReactDOM from 'react-dom';
import TestComponent from './components/TestComponent';
import Util from './Util';
import PageUpdateComponent from './components/PageUpdateComponent';
import { StadiaPlusDB } from '../../shared/StadiaPlusDB';
import InitLibraryComponent from './components/InitLibraryComponent';
import { StadiaGameDB } from './StadiaGameDB';
import IndicatorComponent from './components/IndicatorComponent/IndicatorComponent';
import Fonts from './Fonts';
import GameSettingsComponent from './components/GameSettingsComponent/GameSettingsComponent';
import GameMonitorComponent from './components/GameMonitorComponent/GameMonitorComponent';
import CodecComponent from './components/CodecComponent';
import ResolutionComponent from './components/ResolutionComponent';
import AbstractComponent from './components/AbstractComponent';


document.addEventListener('DOMContentLoaded', async () => {
    Fonts.load('Overpass', [200, 300, 400, 700]);

    StadiaPlusDB.connect('http://localhost:3000').then(() => {
        StadiaPlusDB.authenticate();
        StadiaGameDB.update();
    });

    const root = document.createElement('div');
    root.id = 'stadiaplus-root';
    document.body.appendChild(root);

    ReactDOM.render(
        <div>
            <InitLibraryComponent/>
            <PageUpdateComponent/>
            <IndicatorComponent/>
            <GameSettingsComponent/>
            <GameMonitorComponent/>
            <CodecComponent/>
            <ResolutionComponent/>
        </div>,
        root
    );

    void AbstractComponent.startMutationListener();
    Util.updateRenderer();
})
