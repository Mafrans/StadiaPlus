import React from 'react';
import ReactDOM from 'react-dom';
import Util from './Util';
import { StadiaPlusDB } from '../../shared/StadiaPlusDB';
import { StadiaGameDB } from './StadiaGameDB';
import Fonts from './Fonts';
import PageUpdateComponent from './components/PageUpdateComponent/PageUpdateComponent';
import GameSettingsComponent from './components/GameSettingsComponent/GameSettingsComponent';
import InitLibraryComponent from './components/InitLibraryComponent';
import GameMonitorComponent from './components/GameMonitorComponent/GameMonitorComponent';
import CodecComponent from './components/CodecComponent';
import InGameSyncComponent from './components/InGameSyncComponent';
import ResolutionComponent from './components/ResolutionComponent';
import { createNavigationHook, startPageUpdateHandler } from './StadiaPage';
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
    Util.desandbox(createNavigationHook, { immediate: true });
    startPageUpdateHandler();
})