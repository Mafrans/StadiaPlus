import React from 'react';
import ReactDOM from 'react-dom';
import Util from './Util';
import { StadiaPlusDB } from '../../shared/StadiaPlusDB';
import { StadiaGameDB } from './StadiaGameDB';
import Fonts from './Fonts';
import PageUpdateComponent from './components/PageUpdateComponent/PageUpdateComponent';
import IndicatorComponent from './components/IndicatorComponent/IndicatorComponent';
import GameSettingsComponent from './components/GameSettingsComponent/GameSettingsComponent';
import InitLibraryComponent from './components/InitLibraryComponent';
import GameMonitorComponent from './components/GameMonitorComponent/GameMonitorComponent';
import CodecComponent from './components/CodecComponent';
import AbstractComponent from './components/AbstractComponent';
import InGameSyncComponent from './components/InGameSyncComponent';
import ResolutionComponent from './components/ResolutionComponent';
import { updatePage } from './StadiaPage';
import { StadiaSelectors } from './StadiaSelectors';


document.addEventListener('DOMContentLoaded', async () => {
    Fonts.load('Overpass', [200, 300, 400, 700]);

    StadiaPlusDB.connect('http://localhost:3000').then(() => {
        StadiaPlusDB.authenticate();
        StadiaGameDB.update();
    });

    const root = document.createElement('div');
    root.id = 'stadiaplus-root';
    document.body.appendChild(root);

    ResolutionComponent();
    InitLibraryComponent();
    CodecComponent();
    ResolutionComponent();
    InGameSyncComponent();

    ReactDOM.render(<>
        <PageUpdateComponent/>
        <IndicatorComponent/>
        <GameSettingsComponent/>
        <GameMonitorComponent/>
    </>,root)


    Util.observe(document.querySelector(StadiaSelectors.RENDERER_CONTAINER)!, 'childList', Node.ELEMENT_NODE, (mutation, node) => {
        if (mutation.addedNodes.length > 0) {
            const renderer = mutation.addedNodes.item(0) as HTMLElement;
            console.log({renderer})
            if (renderer != null) {
                Util.setRenderer(renderer)
            }
        }
    });

    Util.updateRenderer();

    setInterval(() => updatePage(), 1000);
})
