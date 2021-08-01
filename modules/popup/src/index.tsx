import ReactDOM from 'react-dom';
import React from 'react';
import 'reset-css';
import '@fontsource/overpass';
import '@fontsource/overpass/300.css';
import '@fontsource/overpass/600.css';
import Router from './Router';
import { Theme } from '../../shared/Theme';
import StadiaPlusDB from '../../shared/StadiaPlusDB';

void StadiaPlusDB.connect('https://beta.stadiaplus.dev');

// This is a really dumb solution, but
// it works and shouldn't cause any issues
document.body.style.backgroundColor = Theme.Colors.gray['900'];

ReactDOM.render(
    <Router />,
    document.getElementById('app')
);