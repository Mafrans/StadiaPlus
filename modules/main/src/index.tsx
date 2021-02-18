import React from 'react';
import ReactDOM from 'react-dom';
import TestComponent from './components/TestComponent';
import Util from './Util';
import PageUpdateComponent from './components/PageUpdateComponent';
import StadiaPlusDB from '../../shared/StadiaPlusDB';
import GameUpdateComponent from './components/GameUpdateComponent';

console.log("main2");

window.addEventListener('load', async () => {
    await StadiaPlusDB.connect('http://localhost:3000');
    await StadiaPlusDB.authenticate();
    await Util.updateRenderer();

    const root = document.createElement('div');
    root.id = 'stadiaplus-root';
    document.body.appendChild(root);

    ReactDOM.render(
        <div>
            <GameUpdateComponent/>
            <PageUpdateComponent/>
        </div>,
        root
    )
})
