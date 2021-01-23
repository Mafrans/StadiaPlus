import React from 'react';
import ReactDOM from 'react-dom';
import TestComponent from './components/TestComponent';
import Util from './Util';

console.log("main2");

window.addEventListener('load', async () => {
    await Util.updateRenderer();

    const root = document.createElement('div');
    document.body.appendChild(root)

    ReactDOM.render(
        <div>
            <TestComponent/>
        </div>,
        root
    )
})
